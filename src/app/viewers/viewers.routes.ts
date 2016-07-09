import {EventViewerComponent} from './event-viewer.component';
import {AllEventsViewerComponent} from './allevents-viewer.component';
import {AllDealersViewerComponent} from './alldealers-viewer.component';
import {DealerViewerComponent} from './dealer-viewer.component';
export const ViewersRoutes = [
    {path: '/event/all', component: AllEventsViewerComponent},
    {path: '/event/:id', component: EventViewerComponent},
    {path: '/dealer/all', component: AllDealersViewerComponent},
    {path: '/dealer/:id', component: DealerViewerComponent},
];
