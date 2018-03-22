// define routes
Aviator.setRoutes({
  target: AppRouteTarget,
  // setupLayout is run for every route in the route tree.
  '/*': 'setupLayout'
  '/david': {
    target: davidTarget,
  }
  '/': {
    target: indexTarget,
  }
});

// Start routing
Aviator.dispatch();
