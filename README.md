
# Build your first social network  

**Deadline: 24/01/2023**

**You will have to upload the code to a private Github repository and add @w0xter as a member to review the code. **

The goal is to create [a feed like that of LensAI](https://www.artofficialintelligence.xyz/gallery) where you can explore images from the community. The most basic version of this will be to replicate the Community gallery of LensAI where you can explore posts in chronological order or using different filters. After completing the task, you will need to extend the functionality to be able to [view a user's profile](https://www.artofficialintelligence.xyz/user/w0xt3r.lens) and a [post page](https://www.artofficialintelligence.xyz/post/0xbedb-0xd7) with more information such as the description or comments.

What is Lens Protocol?

[Lens Protocol](https://www.lens.xyz/garden) is a decentralized social graph, it can be used to include social interactions within your application. With Lens, you can create a social network easily, add friends, explore feeds, comment and share posts.

How to connect to Lens Protocol?

Connection to Lens Protocol is done through its API, using GraphQL you can communicate with the platform to perform all types of actions. In this case, I have adapted the code so that you do not have to build the connection logic from scratch.

I have created a component called [ExplorePublications](https://github.com/novusmundi/challenge/blob/main/src/components/ExplorePublications.js) with which you can see an example of the configuration and the way to run the query, with this example you should be able to complete the rest of the code necessary to complete the feed view. Keep in mind that you need to create an infinite scroll using the query but modifying the cursor to be able to iterate over the data.

I have created queries for the rest of the necessary components so you should not have any complexity when developing them. If you have any questions, you can [join this Telegram chat](https://t.me/+cJeJKn-DbogyZmI0) to ask your questions.



# Construye tu primera red social  

**Deadline: 24/01/2023**

**Deberéis crear un repositorio privado en github y añadir a @w0xter como miembro para poder revisar el código.**

El objetivo es crear un [feed como el de LensAI](https://www.artofficialintelligence.xyz/gallery) donde poder explorar las imágenes de la comunidad. La versión más básica de este será replicar la Community gallery de LensAI aquí puedes explorar los posts en orden cronológico o usando distintos filtros. 
Tras completar tarea deberéis extender las funcionalidades para poder [ver el perfil de un usuario](https://www.artofficialintelligence.xyz/user/w0xt3r.lens) y una [página de post](https://www.artofficialintelligence.xyz/post/0xbedb-0xd7) con más información como la descripción o los comentarios. 

¿Qué es lens protocol?

[Lens Protocol](https://www.lens.xyz/garden) es un social graph descentralizado, se puede usar para incluir interacciones sociales dentro de tu aplicación. Con Lens puedes crear una red social de manera sencilla,añadir amigos, explorar feeds, comentar y compartir posts. 

¿Cómo conectarse a Lens Protocol?


La conexión a Lens Protocol se hace a través de su API, usando GraphQL te puedes comunicar con la plataforma para realizar todo tipo de acciones. En esta ocasión he adaptado el código para que no tengáis que construir la lógica de conexión desde cero. 

He creado un componente llamado [ExplorePublications](https://github.com/novusmundi/challenge/blob/main/src/components/ExplorePublications.js) con el que podeis ver un ejemplo de la configuración y la forma de ejecutar la query, con este ejemplo deberéis ser capaces de completar el resto del código necesario para completar la vista del feed. Tened en cuenta que hay que crear un infinite scroll usando la query pero modificando el cursor para poder iterar sobre los datos.   
 
He creado queries para el resto de componentes necesarios por lo que no deberíais tener ninguna complejidad a la hora de desarrollarlos. Si tenéis alguna duda podéis uniros a [este chat de telegram](https://t.me/+cJeJKn-DbogyZmI0) para hacer vuestras preguntas. 



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
