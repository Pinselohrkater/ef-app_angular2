import {EventViewerComponent} from './event-viewer.component';
import {AllEventsViewerComponent} from './allevents-viewer.component';

export const ViewersRoutes = [
  { path: '/event/all',  component: AllEventsViewerComponent },
  { path: '/event/:id',  component: EventViewerComponent }
];
