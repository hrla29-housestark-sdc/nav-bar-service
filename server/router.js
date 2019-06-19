const router = require('express').Router();
const controller = require('./controller');

router.route('/navs').get(controller.getDepartments);
router
  .route('/search')
  .get(controller.getAll)
  .post(controller.post)
  .delete(controller.delete);

// router.route('/search/:query').get(controller.getSearchResults);
router.route('/search/:_id').get(controller.getSearchResults);

router.route('/random').get(controller.random);

router.route('/search/:_id').put(controller.update);

module.exports = router;
