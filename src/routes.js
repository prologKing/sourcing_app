import React from 'react'

const Dashboard = React.lazy(() => import('./buyer/views/dashboard/Dashboard'))
const SupplierDashboard = React.lazy(() => import('./supplier/views/dashboard/Dashboard'))
const Invoices = React.lazy(() => import('./supplier/views/Invoices/Invoices'))
const InvoiceDetails = React.lazy(() => import('./supplier/views/Invoices/InvoiceDetails'))
const InvoiceForm = React.lazy(() => import('./supplier/views/Invoices/InvoiceForm'))
const Orders = React.lazy(() => import('./supplier/views/Orders/Orders'))
const OrderDetails = React.lazy(() => import('./supplier/views/Orders/OrderDetails'))
const OrderMessages = React.lazy(() => import('./supplier/views/Orders/Messages'))
const Events = React.lazy(() => import('./supplier/views/RFx/Events'))
const EventDetails = React.lazy(() => import('./supplier/views/RFx/EventDetails'))
const Response = React.lazy(() => import('./supplier/views/RFx/Response'))
const Messages = React.lazy(() => import('./supplier/views/RFx/Messages'))
const Source = React.lazy(() => import('./buyer/views/Source/Source'))
const SourceDetails = React.lazy(() => import('./buyer/views/Source/SourceDetails'))
const Colors = React.lazy(() => import('./buyer/views/theme/colors/Colors'))
const Base = React.lazy(() => import('./buyer/views/Settings/Base'))

// Base
const Accordion = React.lazy(() => import('./buyer/views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./buyer/views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./buyer/views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./buyer/views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./buyer/views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./buyer/views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./buyer/views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./buyer/views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./buyer/views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./buyer/views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./buyer/views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./buyer/views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./buyer/views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./buyer/views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./buyer/views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./buyer/views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./buyer/views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./buyer/views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./buyer/views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./buyer/views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./buyer/views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./buyer/views/forms/layout/Layout'))
const Range = React.lazy(() => import('./buyer/views/forms/range/Range'))
const Select = React.lazy(() => import('./buyer/views/forms/select/Select'))
const Validation = React.lazy(() => import('./buyer/views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./buyer/views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./buyer/views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./buyer/views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./buyer/views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./buyer/views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./buyer/views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./buyer/views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./buyer/views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./buyer/views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/buyer-home', name: '', element: Dashboard },
  { path: '/supplier-home', name: '', element: SupplierDashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/invoices', name: 'Invoices', element: Invoices },
  { path: '/invoices/details', name: 'Invoice Details', element: InvoiceDetails },
  { path: '/invoices/form', name: 'Invoice Form', element: InvoiceForm },
  { path: '/source', name: 'Source', element: Source },
  { path: '/source/details', name: 'Details', element: SourceDetails },
  { path: '/events', name: 'Events', element: Events },
  { path: '/events/details', name: 'Event Details', element: EventDetails },
  { path: '/events/details/response', name: 'Events Details', element: Response },
  { path: '/events/details/messages', name: 'Events Details', element: Messages },
  { path: '/orders', name: 'Orders', element: Orders },
  { path: '/orders/details', name: 'Order Details', element: OrderDetails },
  { path: '/orders/details/messages', name: 'Order Details', element: OrderMessages },
  { path: '/procure', name: 'Procure', element: Base },
  { path: '/settings', name: 'Settings', element: Base },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/insights', name: 'Insights', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/pay', name: 'Pay', element: Widgets },
]

export default routes
