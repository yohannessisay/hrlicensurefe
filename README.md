
# electronic Health Professionals Licensing System

#Aka HRL

The HRL platform, hosted at hrl.moh.gov.et, is an innovative online licensing system designed to streamline and digitize the process of licensing healthcare professionals and facilities in Ethiopia. This platform, offers a user-friendly interface for both applicants and regulatory authorities, facilitating efficient management of licensing procedures.

Healthcare professionals and facilities can utilize the HRL system to submit license applications, track their status in real-time, and manage necessary documentation electronically. Through secure authentication mechanisms, users can access personalized dashboards tailored to their specific licensing needs, ensuring a seamless and transparent experience.

## Authors

- [@yohannessisay](https://t.me/yohannes_sisay)- Yohannes Sisay

## Appendix

1.About HRL

2.What to do next

## Run Locally

Clone the project

```bash

gitclonehttps://yohannes_sisay@bitbucket.org/hadmin/hrlicensurefe.git

```

Go to the project directory

```bash

cdmy-project

```

Install dependencies

```bash

npminstall

```

Start the server

```bash

npmrunserve

```

## Roadmap

- Convert each image (Static ones) to the maximum level where an image can be optimized as possible.
- Refactor Refactor Refactor
- Applicant side refactor is almost complete except file upload and vuex store api calls and stuff so finalize applicant side refactor
- Reviewer side has not been refactored and it is the one that will see the most improvment when refactored
- Remove uneccessary vuex store functions and related weird codes that i was too lazy to remove or to busy working on the system trying to make it moderatley usable
- Please refactor reviewer side, yes i have to remind you two times
- Think about intgerating redis for user session management and remove this ridicuolusly easy to hack token stored in local storage, yes i know why didn't you guys do it might you ask?...wll i told you i  was busy making the system usable i did not have the luxury you have right now back then it was chaos.
- Make the permission and role based on the session data returned to you on each request so instead of the 5 roles we have now try to integrate permissions concept to the frontend side like HRA and HRD
- I know there are only 5 roles here but integrate the permission concept with dynamic role and permission management method
- Try to remove localstorage dependency as much as possible
- Try to change the authentication method from token to cookie based
- I have removed a lot of libraries and tried to use custom methods using the good old vanilla js so if you encounter a function that could have been done through a custom method written in vanilla js dont hesitate to remove the library so that library dependency (or called coupling in fancy programming terms) is lower.
- Write tests for each component, Oww you hate writting tests? tough luck, write it!!!
