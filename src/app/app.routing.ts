export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [],
  { path: '**', component: ErrorPageComponent, data: { error_message: DEFAULT_ERROR_PAGE_MESSAGE } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
