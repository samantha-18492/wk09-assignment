Problem domain: Finding a new job can be hard – from weighing up the right role and salary to choosing a location that works. But one crucial factor often gets overlooked: understanding whether the company itself is a good fit. Without access to honest insights into culture and employee experiences, it's difficult for job seekers to make confident, informed decisions about their careers.

End goal: Create a web app where job seekers can log in, browse a list of predefined companies, and read or write honest reviews about what it's like to work for them.

Requirements:

- Set up user sign-up and user login using Clerk.
- Create and display an error/not found page if the user visits a page that doesn’t exist.
- Use 1 or more Radix UI Primitive component, or something similar (e.g. use of a different component library to enhance UX, not just Tailwind).
- Enable users to create a user profile, and input profile information (such as a user biography) using a form. Users and user information should be stored in their own table in the database and handled with an appropriate route.
- Enable users to create posts associated with their Clerk userId. Posts should be displayed on the user’s profile page.
- Allow users to update their content. You can achieve this either with a dynamic route (“/posts/[id]/edit”) or by creating a modal.
- Allow users to delete their content.
- Ensure that a user’s biography cannot be left blank. If a user logs in without one, prompt them to add this information.
- Create and display an error/not found page if the user visits another [company] that doesn’t exist.

Wireframe:
<img width="1462" height="722" alt="Image" src="https://github.com/user-attachments/assets/fe30b8e4-ab82-41ee-b41b-daffadf0e023" />

Database schema:
<img width="724" height="562" alt="Image" src="https://github.com/user-attachments/assets/bcb8a91e-8d18-4e4c-a44a-3a4d47b9fe17" />

Reflection:
I really appreciated how simple and intuitive the Clerk system was to use. I;ve ensured all relevant pages include a redirectToSignIn route so that only authenticated users can access certain features. The only public pages are the home page and about page. I attempted to customise the appearance of the Clerk components using the provided documentation, but couldn’t get the changes to appear in development mode. I read that clearing the cache and restarting the terminal can sometimes resolve this, but since I still couldn’t view the updates, I decided to move on.

In addition to a general not-found page for routes that don’t exist, I created a custom not-found page for the /companies route. This displays when a company isn’t in the database and encourages users to return to the company listings instead of the homepage, which I think improves the user experience.

I was particularly pleased with how I implemented the UserSignUpForm component — using it for both new users and existing users editing their profiles. This approach kept the code cleaner and avoided unnecessary duplication.

I initially experimented with the Navigation Menu Radix primitive but found it difficult to integrate with Clerk’s SignedIn components. Instead, I decided to use the Accordion component on the About page to present the FAQ section. This felt like a more appropriate and achievable use of Radix UI within the project.

For the user interface, I kept the design simple and professional, with limited colour use to highlight interactive elements such as buttons and links.

Overall, I really enjoyed building this week’s project. It helped me better understand how authentication systems integrate with databases and UI components. In future, I’d like to experiment with building a simplified version of a social network — similar to Facebook — to test my knowledge and challenge myself further.
