import {
     mobile,
     backend,
     creator,
     web,
     javascript,
     typescript,
     html,
     css,
     reactjs,
     redux,
     tailwind,
     nodejs,
     mongodb,
     git,
     figma,
     docker,
     meta,
     starbucks,
     tesla,
     shopify,
     carrent,
     jobit,
     tripguide,
     threejs,
     WavePro,
    
   } from "../assets";
   
   export const navLinks = [
    {
      id: "Categories",
      title: "Categories",
    },
    {
      id: "Daily Deals",
      title: "Daily Deals",
    },
    {
      id: "About",
      title: "About",
    },
    {
      id:"Contact",
      title:"Contact"
    }
  ];
   
   const services = [
     {
       title: "Web Developer",
       icon: web,
     },
     {
       title: "React Native Developer",
       icon: mobile,
     },
     {
       title: "Backend Developer",
       icon: backend,
     },
     {
       title: "Content Creator",
       icon: creator,
     },
   ];

   
   // DAILY PRODUCTS : 
   const DailyProducts =[
    {
      title:"Wave Pro",
      icon:WavePro,
      cost: 1299,
      discount:81,
      mrp:6990,
      rating:"5.0",
      offer:"$15 Extra Discount on UPI"
    },
    {
      title:"Airdopes 131",
      icon:WavePro,
      cost: 999,
      discount:67,
      mrp:2990,
      rating:"4.8",
      offer:"$15 Extra Discount on UPI"
    },
    {
      title:"Wave Lite",
      icon:WavePro,
      cost: 1499,
      discount:79,
      mrp:6990,
      rating:"4.9",
      offer:"$15 Extra Discount on UPI"
    },
    {
      title:"Rockerz 255 Pro+",
      icon:WavePro,
      cost: 1599,
      discount:79,
      mrp:3990,
      rating:"4.9",
      offer:"$15 Extra Discount on UPI"
    },
    {
      title:"Airpodes 161",
      icon:WavePro,
      cost: 1099,
      discount:56,
      mrp:2490,
      rating:"4.9",
      offer:"$15 Extra Discount on UPI"
    }
   ]
   
   const technologies = [
     {
       name: "HTML 5",
       icon: html,
     },
     {
       name: "CSS 3",
       icon: css,
     },
     {
       name: "JavaScript",
       icon: javascript,
     },
     {
       name: "TypeScript",
       icon: typescript,
     },
     {
       name: "React JS",
       icon: reactjs,
     },
     {
       name: "Redux Toolkit",
       icon: redux,
     },
     {
       name: "Tailwind CSS",
       icon: tailwind,
     },
     {
       name: "Node JS",
       icon: nodejs,
     },
     {
       name: "MongoDB",
       icon: mongodb,
     },
     {
       name: "Three JS",
       icon: threejs,
     },
     {
       name: "git",
       icon: git,
     },
     {
       name: "figma",
       icon: figma,
     },
     {
       name: "docker",
       icon: docker,
     },
   ];

   // SHOP BY CATEGORIES 
   const Categories=[
    {
      title:"True Wireless Earbuds",
      icon:WavePro,
    },
    {
      title:"Neckbands",
      icon:WavePro,
    },
    {
      title:"Smart Watches",
      icon:WavePro,
    },
    {
      title:"Wireless Headphones",
      icon:WavePro,
    },
    {
      title:"Wireless Speaker",
      icon:WavePro,
    },
    {
      title:"Wired Speaker",
      icon:WavePro,
    },
    {
      title:"Power Bank",
      icon:WavePro,
    },
    {
      title:"Soundbars",
      icon:WavePro,
    }

   ]

   
   const experiences = [
     {
       title: "React.js Developer",
       company_name: "Starbucks",
       icon: starbucks,
       iconBg: "#383E56",
       date: "March 2020 - April 2021",
       points: [
         "Developing and maintaining web applications using React.js and other related technologies.",
         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
         "Implementing responsive design and ensuring cross-browser compatibility.",
         "Participating in code reviews and providing constructive feedback to other developers.",
       ],
     },
     {
       title: "React Native Developer",
       company_name: "Tesla",
       icon: tesla,
       iconBg: "#E6DEDD",
       date: "Jan 2021 - Feb 2022",
       points: [
         "Developing and maintaining web applications using React.js and other related technologies.",
         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
         "Implementing responsive design and ensuring cross-browser compatibility.",
         "Participating in code reviews and providing constructive feedback to other developers.",
       ],
     },
     {
       title: "Web Developer",
       company_name: "Shopify",
       icon: shopify,
       iconBg: "#383E56",
       date: "Jan 2022 - Jan 2023",
       points: [
         "Developing and maintaining web applications using React.js and other related technologies.",
         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
         "Implementing responsive design and ensuring cross-browser compatibility.",
         "Participating in code reviews and providing constructive feedback to other developers.",
       ],
     },
     {
       title: "Full stack Developer",
       company_name: "Meta",
       icon: meta,
       iconBg: "#E6DEDD",
       date: "Jan 2023 - Present",
       points: [
         "Developing and maintaining web applications using React.js and other related technologies.",
         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
         "Implementing responsive design and ensuring cross-browser compatibility.",
         "Participating in code reviews and providing constructive feedback to other developers.",
       ],
     },
   ];
   
   const testimonials = [
     {
       testimonial:
         "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
       name: "Sara Lee",
       designation: "CFO",
       company: "Acme Co",
       image: "https://randomuser.me/api/portraits/women/4.jpg",
     },
     {
       testimonial:
         "I've never met a web developer who truly cares about their clients' success like Rick does.",
       name: "Chris Brown",
       designation: "COO",
       company: "DEF Corp",
       image: "https://randomuser.me/api/portraits/men/5.jpg",
     },
     {
       testimonial:
         "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
       name: "Lisa Wang",
       designation: "CTO",
       company: "456 Enterprises",
       image: "https://randomuser.me/api/portraits/women/6.jpg",
     },
   ];
   
   const projects = [
     {
       name: "Car Rent",
       description:
         "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
       tags: [
         {
           name: "react",
           color: "blue-text-gradient",
         },
         {
           name: "mongodb",
           color: "green-text-gradient",
         },
         {
           name: "tailwind",
           color: "pink-text-gradient",
         },
       ],
       image: carrent,
       source_code_link: "https://github.com/",
     },
     {
       name: "Job IT",
       description:
         "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
       tags: [
         {
           name: "react",
           color: "blue-text-gradient",
         },
         {
           name: "restapi",
           color: "green-text-gradient",
         },
         {
           name: "scss",
           color: "pink-text-gradient",
         },
       ],
       image: jobit,
       source_code_link: "https://github.com/",
     },
     {
       name: "Trip Guide",
       description:
         "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
       tags: [
         {
           name: "nextjs",
           color: "blue-text-gradient",
         },
         {
           name: "supabase",
           color: "green-text-gradient",
         },
         {
           name: "css",
           color: "pink-text-gradient",
         },
       ],
       image: tripguide,
       source_code_link: "https://github.com/",
     },
   ];
   
   export { Categories,DailyProducts,services, technologies, experiences, testimonials, projects };
   