import { Route, Routes } from 'react-router'
import { Layout } from '../../Layout'
import { ViewHome } from '../ViewHome'
import { ViewLogin } from '../ViewLogin'
import { ViewRegister } from '../ViewRegister'
import { ViewAdmin } from '../ViewAdmin'
import { ViewEvents } from '../ViewEvents'
import { PrivateRoute } from '../privateRoute/PrivateRoute'
import { PublicRoute } from '../publicRoute/PublicRoute'
import { PrivateAdmin } from '../privateAdmin/PrivateAdmin'
import { routes } from './helperRoutes'
import { ViewCreateCollection } from '../ViewCreateCollection'
import { ViewCollection } from '../ViewCollection'
import { ViewCollectionDetails } from '../ViewCollectionDetails'
import { ViewCreateEvent } from '../ViewCreateEvent'
import { ViewEventsDetail } from '../ViewEventsDetail'
import { ViewUserProfile } from '../ViewUserProfile'
import { Page404 } from '../../components/page404/Page404'

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<PrivateRoute />}>
          <Route
            path={routes.createCollection}
            element={<ViewCreateCollection />}
          />
          <Route path={routes.createEvents} element={<ViewCreateEvent />} />
          <Route path={routes.userProfile} element={<ViewUserProfile />} />
          <Route element={<PrivateAdmin />}>
            <Route path={`${routes.admin}/:table`} element={<ViewAdmin />} />
          </Route>
        </Route>
        <Route element={<PublicRoute />}>
          <Route path={routes.login} element={<ViewLogin />} />
        </Route>
        <Route path={routes.home} element={<ViewHome />} />
        <Route path={routes.collection} element={<ViewCollection />} />
        <Route
          path={routes.collectionDetails}
          element={<ViewCollectionDetails />}
        />
        <Route path={routes.events} element={<ViewEvents />} />
        <Route path={routes.eventsDetails} element={<ViewEventsDetail />} />
      </Route>
      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}
