const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:id
router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/users/:id/thoughts/:thoughtId/reactions
router.route('/:id/thoughts/:thoughtId/reactions').post(addReaction)

// /api/users/:id/thoughts/:thoughtId/reactions/:reactionId
router.route('/:id/thoughts/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
