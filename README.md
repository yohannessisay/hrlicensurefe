# electronic Health Professionals Licensing System

#Aka HRL

The HRL platform, hosted at hrl.moh.gov.et, is an innovative online licensing system designed to streamline and digitize the process of licensing healthcare professionals and facilities in Ethiopia. This platform, offers a user-friendly interface for both applicants and regulatory authorities, facilitating efficient management of licensing procedures.

Healthcare professionals and facilities can utilize the HRL system to submit license applications, track their status in real-time, and manage necessary documentation electronically. Through secure authentication mechanisms, users can access personalized dashboards tailored to their specific licensing needs, ensuring a seamless and transparent experience.

Obviously this one above is written using chat gpt, i have no time to write this all, but everything below is written from a dark places this project has shown me at times.

## Authors

- [@yohannessisay](https://www.github.com/yohannessisay)- Yohannes Sisay

## Appendix

1.About HRL
2.What to do next

## Run Locally

Clone the project

```bash
 git clone https://yohannes_sisay@bitbucket.org/hadmin/hrlicensurefe.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run serve
```

Finally complain why tailwind is not optimized and other facts like why did we not use vuetify and so on, but we did what we did so just try to improve it.

## Roadmap

- Convert components used like 10000000 times in every place to a shared ones by utilizing vue's amazing props feature and also minimze unused css classes everywhere, and yes trust me you haven't seen this project at its lowest so you dont even know what you are talking about, just clean it up more.
- Optimize performance and yes the project as it is great when tested for performance (around 87) in google chrome's lighthouse but I want it to reach those beautiful green labels (around 94 or 96 would be great)
- Convert each image to the maximum level where an image can be optimized as possible.
- Try to remove localstorage dependency as much as possible
- Try to change the authentication method from token to cookie based
- Write tests for each component, Ow you hate writting tests? tough luck, write it!!!

## Lessons Learned

Please do not use bootstrap and its related witchcraft ,please avoid using that abomination of frontend world, we have used it here with tailwind, we have not used used bootstrap but the ui framework i used because vuetify was cruel back then and did not support vue 3 is called Tailwind Elements and boy was it the weirdest one out there back then, dont look at it now and say owww this is nice, what a nice library, nooooooooo it was worse back then, did you see the code here??...it was written when that library was beta back then and at the time i did not have the luxury to choose ui frameworks, it was all chaos back in the office soooo try to convert some components to a custom one with a nice tailwind classes customization and use those custom components.

For example, convert the modal component to a custom one and convert those page reloads that make the system feel like its 1998 to a custom modal that accepts a props and use those props to remove the modal, some vanilla javascript magic will be required from you because...you guessed it bootsrap is involved....and yes good luck
