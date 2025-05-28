let instance: any = null;
export function initNavigation(router: any) {
  console.warn('[PS-CORE] Router instance ', router);
  instance = router;
}
export function navigate(path: string) {
  console.warn('[PS-CORE] Navigate to ', path);
  if (!instance) {
    console.warn('[PS-CORE] Instance is not initialized!');
    return;
  }
  instance.push(path);
}