# your-measurement-app
A measurement device project consisting of 2 modules: a *Raspberry Pi* measurement app and a cross-platform mobile app allowing to display the collected data.

# your-measurement-embedded
In the original project it was a *Raspberry Pi 3B* device with connected temperature and humidity mesurers. The device made a measurement every i.e. 5 seconds (depending on the delay set) and then sent it to the JSON-oriented database in the *Firebase* 'serverless' service.

To make the device work, it's needed to provide a back-end service and set it in the *index.js* file.

To start the masurement process, run on the device the *index.js* file with:

```javascript
npm run
```

# your-measurement-mobile
It's a *React Natice* app project allowing to display data collected by the measurement device. It heavily depends on the *Firebase* service - it's needed to create and authenticate the user account and to associate it with a masurement device. In the currect project version, the device used to prepare the **your-measurement-embedded** module was *hardcoded* as available for all users by default.

To run the app, you can *clone* the **your-measurement-mobile** module and start it using the [Expo](https://guides.github.com/features/mastering-markdown/) service.
