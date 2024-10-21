export function notify(title: string, text?: string) {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    console.log("This browser does not support desktop notification")
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    new Notification(title, { body: text, icon: "/favicon.ico" })
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        new Notification(title, { body: text, icon: "/favicon.ico" })
      } else if (permission === "denied") {
        console.log("Notification permission denied!")
      }
    })
  }
}
