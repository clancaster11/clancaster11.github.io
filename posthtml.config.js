const sequence = require('post-sequence');

const plugins = {
  "posthtml-expressions": {
    "locals": {
      areas: [
        {
          "title": "Exposure Therapy for Anxiety and Related Disorders",
          "description": "Exposure therapy is one of the most potent techniques available for treating anxiety and related disorders. However, our understanding of its mechanisms is still rapidly evolving. Our research evaluates the mechanisms of exposure therapy and tests strategies for enhancing its efficacy. A primary aim is to translate lessons learned from basic science and behavioral neuroscience to clinical application."
        },
        {
          "title": "Development and Prevention of PTSD",
          "description": "A subset of individuals who experience trauma subsequently develop posttraumatic stress disorder (PTSD). About 8% of the US population will experience PTSD at some point in their lifetime. Our research investigates factors that protect against the development of PTSD and other stress-related disorders with the ultimate aim of informing the prevention and treatment of PTSD. We focus in particular on populations with high levels of occupational stress, including military personnel, first responders, and healthcare providers."
        },
        {
          "title": "Influence of Social Factors on Stress, Anxiety, and PTSD",
          "description": "Humans are fundamentally social beings, and social factors play an important role in both amplifying and mitigating fear and stress reactions. A developing aim of our research is to study the influence of social factors on the onset and treatment of anxiety and stress-related disorders. Ongoing work evaluates the impact of in-group/out-group racial status on reactions to trauma disclosure and the experience of social anxiety; social allocation of threat vigilance and reactivity in PTSD; and the influence of social factors on outcomes from exposure therapy."
        }
      ],
      members: [
        {
          "name": "Cynthia Lancaster, Ph.D.",
          "title": "Lab Director",
          "email": "cynthialancaster@unr.edu",
          "image": "./images/cindy.jpg",
          "bio": 'Dr. Lancaster is an assistant professor in clinical psychology at the University of Nevada, Reno. She received her B.A. from Trinity University in San Antonio. She was a post-baccalaureate research associate at the University of Texas Health Science Center at San Antonio and STRONG STAR Consortium. She completed her Ph.D. at the University of Texas at Austin, and her pre-doctoral internship at the Charleston Consortium (Medical University of South Carolina and Ralph H. Johnson VAMC). She joined the faculty at UNR in 2017. See her <a href="{{links.cindyCV}}" target="_blank">CV</a> for more detail.'
        },
        {
          "name": "Sam Meckes",
          "title": "Doctoral Student",
          "email": "meckes@nevada.unr.edu",
          "image": "./images/sam.jfif",
          "bio": 'Sam is a fourth-year doctoral student in the clinical psychology program at UNR. She received her undergraduate degree from Dartmouth College, and her M.A. in clinical psychology (emphasis in Marriage and Family Therapy) from Azusa Pacific University. Sam’s current research interests draw from social and clinical psychology, particularly in the areas of intergroup relations, empathy, and anxiety. Outside of the lab, Sam likes to hike or kayak with her husband and two dogs, garden, and bake all the things.'
        },
        {
          "name": "Mollie McDonald",
          "title": "Doctoral Student",
          "email": "molliemcdonald@nevada.unr.edu",
          "image": "./images/mollie.jpg",
          "bio": 'Mollie is a fourth-year doctoral student in the clinical psychology program at UNR. She earned her BA in psychology with a minor in statistics from California State University, Sacramento. She is currently researching how mindfulness practices promote psychological resilience via mechanisms such as improved distress tolerance and executive functioning. Although she is part of UNR\'s "wolf pack," she maintains that she is a cat-person.'
        },
        {
          "name": "Mary Smirnova",
          "title": "Doctoral Student",
          "email": "msmirnova@nevada.unr.edu",
          "image": "./images/mary_smirnova.jpg",
          "bio": 'Mary is a third-year doctoral student in the clinical psychology program at UNR. She graduated from UC Irvine with a B.A. in Psychology and Social Behavior, where she did an honors project focusing on how positive emotion impacts moral decision-making. After college, she joined Dr. Aoife O\'Donovan\'s THRIVE lab as a lab manager and study coordinator and worked on projects related to PTSD and the immune system. Now she is excited to be a graduate student at the Center for Fearless Research to examine mechanisms of anxiety disorders and PTSD and how to utilize these mechanisms to help guide treatment. Currently, she is interested in leveraging social support and gratitude to help individuals with PTSD. In her free time, she enjoys lifting weights, climbing walls, traveling, hiking, and reading (for fun). '
        },
        {
          "name": "Anna Cole",
          "title": "Doctoral Student",
          "email": "accole@nevada.unr.edu",
          "image": "./images/anna_cole.jpg",
          "bio": 'Anna is a second-year doctoral student in the clinical psychology program at UNR. She earned her B.A. in psychology at the University of Mississippi and her M.A. in psychological sciences at Northern Arizona University. Her current research interests include examining the role of disgust in maintaining anxiety disorders and augmenting exposure therapy to improve outcomes. Outside of research, Anna is an avid plant collector and enjoys watching Ole Miss sports with her Great Dane named George. '
        },
        {
          "name": "Kylie Baer",
          "title": "Doctoral Student",
          "email": "kyliebaer@nevada.unr.edu",
          "image": "./images/kylie_baer.jpg",
          "bio": 'Kylie is a first-year doctoral student in the clinical psychology program at UNR. She received her B.A. in psychology at San Diego State University and worked as a research assistant in Dr. Nader Amir’s Center for Understanding and Treating Anxiety lab. Following, she joined Dr. Catherine Ayers’ lab at the San Diego VA Medical Center as a study coordinator and lab manager. There, she worked on multiple RCTs assessing the efficacy of adjunct interventions to exposure in treating veterans with hoarding disorder and PTSD. She intends to further her work in exposure therapy and anxiety/trauma at UNR, focusing on elucidating mechanisms to refine treatments. Apart from psychology, Kylie is interested in fitness and nutrition and enjoys camping, playing volleyball, going to music festivals, and making new recipes in her Instant Pot.'
        }
      ],
      mailing_address: "University of Nevada, Reno<br />1664 N. Virginia Street<br />Mailstop 0298<br />Reno, NV 89502",
      links: {
        "grad_info": 'https://www.unr.edu/psychology/degrees/clinical-phd',
        "campus_area": "https://www.unr.edu/visit",
        "ra_application": "https://www.dropbox.com/s/ni80gbp14los1r8/CFR%20Research%20Assistant%20Application.docx?dl=0",
        "cindyCV": "https://www.dropbox.com/s/ury423ngk9l2v4c/Lancaster%20CV.docx?dl=0",
        "facebook": "https://www.facebook.com/centerforfearlessresearch/",
        "lab_email": "centerforfearlessresearch@gmail.com"
      }
    }
  },
  "posthtml-include": {}
}

const posthtmlConfig = {
  plugins: sequence(plugins, {processor: 'posthtml', namespace: true})
};

module.exports = posthtmlConfig;