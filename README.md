A simple react application that has been put together to understand how to publish a react component to an NPM
repository.

There are three folders:

- server: a very simple server that starts up on port 3001 and shows a web page that contains the sample react widget
that wants to be published to NPM.
- src: the web client
  * the root of src has index.js, that loads the react widget
  * src/app/index.js is the widget to be published
     - the widget is a Material Table grid showing a list of quarterbacks with an add button that will add one
     quarterback per press
- npm: the folder from which to publish from
  * contains a smaller version of the package.json that builds the widget
  * contains a copy of the webpacked widget code

To set up, clone the repository and type ``npm install`` at the root of the application and once again in the 
server folder.

Run it by typing ``npm run start-server`` from the project root and go to http://3001 in a browser and verify that
the grid displays and click ``add`` a few times to see that it is fully functional.

As to publishing to NPM, I have been using Verdaccio from a docker image, ``npm link`` can be used instead, though
I am new to this concept.  Here are the steps to do that:

- First run (from the project root) ``npm run prepare-to-publish``.  This builds a production version of the widget
and copies it to the npm folder.
- In the npm folder, type: ``npm link``
   * This will create a global symlink to the react widget (named publish-react-client) that can now be installed
   via npm on your system as if it were published the actual NPM repository.
- From the project root, type ``npm install publish-react-client``
- In src/index.js, change this line:
```javascript
import Qbs from './app';
```
to
```javascript
import Qbs from 'publish-react-client';
```   
- Now rerun the application and you will see errors due to the way in which webpack is configured to produce the 
deployable artifact

