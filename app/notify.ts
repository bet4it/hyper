import {Notification} from 'electron';

export default function notify(title: string, body = '', details: any = {}) {
  console.log(`[Notification] ${title}: ${body}`);
  if (details.error) {
    console.error(details.error);
  }
  new Notification({title, body}).show();
}
