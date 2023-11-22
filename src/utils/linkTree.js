/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import config from "./config";
import LinkIcon from '@mui/icons-material/Link';
const {
  routes
} = config;

const links = [{
    authorizedUsers: [ 'all'],
    name: "Home",
    icon: <LinkIcon width={"20"}
    className = "mx-3" /> ,
    dropdown: [{
      name: "About NVMA Eko 2023",
      url: '#'
    },
    {
      name: "The Venue",
      url: '#'
    },
    {
      name: "The Host City",
      url: '#'
    }
  ],
  },
  {
    authorizedUsers: ['all'],
    name: "Meet The LOC",
    url: '/meet-the-loc',
    icon: <LinkIcon width={"22px"}
    className = "mx-3" /> 
  },
  {
    authorizedUsers: ['all'],
    name: "NVMA NEC Members",
    url: routes.companies.employees.employee,
    icon: <LinkIcon width={"16px"}
    className = "mx-3" /> ,
  },
  {
    authorizedUsers: ['all'],
    name: 'Registration',
    icon: <LinkIcon width={"16px"}
    className = "mx-3" /> ,
    dropdown: [{
        name: "Registration Information",
        url: '/registration'
      },
      {
        name: "International Participant",
        url: '#'
      }
    ],
  },
  {
    authorizedUsers: ['all'],
    name: "Abstracts",
    icon: <LinkIcon width={"22px"}
    className = "mx-3" />,
    dropdown: [
      {
        name: '1st Call For Abstract',
        url: '#'
      },
      {
        name: 'Abstract Information',
        url: '/abstract'
      },
      {
        name: 'Reviewers Login',
        url: '#'
      }
    ]
  },
  {
    authorizedUsers: ['all'],
    name: 'Exhibition',
    icon: <LinkIcon width={"20px"}
    className = "mx-3" /> ,
    dropdown: [
      {
        name: "Exhibition",
        url: '#'
      },
      {
        name: "Exhibition Floor Plan",
        url: '#'
      },
      {
        name: "Exhibitor's List" 
      }
    ],
  },
 
  {
    authorizedUsers: ['all'],
    name: 'Hotels & Accommodation',
    url: null,
    icon: <LinkIcon width={"20px"}
    className = "mx-3" /> ,
    dropdown: [{
        name: "Official Conference",
        url: '#'
      },
      {
        name: "Book Accommodation",
        url: '#'
      },
    ],
  },
  
  {
    authorizedUsers: ['all'],
    name: 'Sponsorship',
    icon: <LinkIcon width={"20px"}
    className = "mx-3" /> ,
    dropdown: [
      {
        name: "Sponsorship Brochure",
        url: '#' 

      },
      {
        name: "Submit Sponsorship Request",
        url: '#'
      },
      {
        name: "Submit Advert Request",
        url: '#'
      },
    ],
  },
  
]

export default links;