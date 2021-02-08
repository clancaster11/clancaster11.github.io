/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*
*   Simple accordion pattern example
*/

class Accordion {

    static initAll() {

        Array.prototype.slice.call(document.querySelectorAll('.Accordion')).forEach(function (el) {

            // Allow for multiple accordion sections to be expanded at the same time
            new Accordion(el);

        });
    }

    constructor(el) {
        this.el = el
        this.allowMultiple = el.hasAttribute('data-allow-multiple');
        // Allow for each toggle to both open and close individually
        this.allowToggle = (this.allowMultiple) ? this.allowMultiple : el.hasAttribute('data-allow-toggle');

        // Create the array of toggle elements for the accordion group
        this.triggers = Array.prototype.slice.call(el.querySelectorAll('.Accordion-trigger'));
        // var panels = Array.prototype.slice.call(el.querySelectorAll('.Accordion-panel'));


        let self = this;
        this.triggers.forEach((t) => {
            t.onkeydown = () => console.log('go fuck yourself FF')
            t.addEventListener('click', function(event) {
                console.log(event.currentTarget)
                console.log(event)
                if (event.currentTarget.classList.contains('Accordion-trigger')) {
                    self.toggleTarget(event.currentTarget);
        
                    event.preventDefault();
                }
            })
        })

        
        // Bind keyboard behaviors on the main accordion container
        el.addEventListener('keydown', this._handleKeydown.bind(this))

        // Minor setup: will set disabled state, via aria-disabled, to an
        // expanded/ active accordion which is not allowed to be toggled close
        if (!this.allowToggle) {
            // Get the first expanded/ active accordion
            var expanded = el.querySelector('[aria-expanded="true"]');

            // If an expanded/ active accordion is found, disable
            if (expanded) {
                expanded.setAttribute('aria-disabled', 'true');
            }
        }
    }

    _handleKeydown(event) {
        var target = event.target;
        var key = event.key;

        // Is this coming from an accordion header?
        if (target.classList.contains('Accordion-trigger')) {
            // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
            // 38 = Up, 40 = Down
            switch (key) {
                case 'ArrowUp':
                    var index = this.triggers.indexOf(target);
                    var direction = -1; // (key.match(/34|40/)) ? 1 : -1;
                    var length = this.triggers.length;
                    var newIndex = (index + length + direction) % length;

                    this.triggers[newIndex].focus();

                    event.preventDefault();
                    break;
                case 'ArrowDown':
                    var index = this.triggers.indexOf(target);
                    var direction = 1; // (key.match(/34|40/)) ? 1 : -1;
                    var length = this.triggers.length;
                    var newIndex = (index + length + direction) % length;

                    this.triggers[newIndex].focus();

                    event.preventDefault();
                    break;
                // Go to first accordion
                case 'Home':
                    this.triggers[0].focus();
                    break;
                // Go to last accordion
                case 'End':
                    this.triggers[this.triggers.length - 1].focus();
                    break;
                case 'Enter':
                case 'Space':
                case ' ':
                    this.toggleTarget(target);
                    event.preventDefault();
                    break;

                default:
                    console.log(key)
                    break;
            }
        }
    }

    toggleTarget(target) {
        // Check if the current toggle is expanded.
        var isExpanded = target.getAttribute('aria-expanded') == 'true';
        var active = this.el.querySelector('[aria-expanded="true"]');

        // without allowMultiple, close the open accordion
        if (!this.allowMultiple && active && active !== target) {
            // Set the expanded state on the triggering element
            active.setAttribute('aria-expanded', 'false');
            // Hide the accordion sections, using aria-controls to specify the desired section
            document.getElementById(active.getAttribute('aria-controls')).setAttribute('hidden', '');

            // When toggling is not allowed, clean up disabled state
            if (!this.allowToggle) {
                active.removeAttribute('aria-disabled');
            }
        }

        if (!isExpanded) {
            // Set the expanded state on the triggering element
            target.setAttribute('aria-expanded', 'true');

            // this is done in the CSS
            // Hide the accordion sections, using aria-controls to specify the desired section
            // document.getElementById(target.getAttribute('aria-controls')).removeAttribute('hidden');

            // If toggling is not allowed, set disabled state on trigger
            if (!this.allowToggle) {
                target.setAttribute('aria-disabled', 'true');
            }
        }
        else if (this.allowToggle && isExpanded) {
            // Set the expanded state on the triggering element
            target.setAttribute('aria-expanded', 'false');

            //also done in CSS
            // Hide the accordion sections, using aria-controls to specify the desired section
            // document.getElementById(target.getAttribute('aria-controls')).setAttribute('hidden', '');
        }
    }
}

export default Accordion;