import { Router } from 'express';
import { getPeople,  createPerson,  updatePerson,  deletePerson,} from '../controllers/personController.js';

const router = Router();

// router.route("/getPeople").get(getPeople)
// router.route("/create").post(createPerson)
// router.route("/update/:id").put(updatePerson)
// router.route("/delete/:id").get(deletePerson)

router.get('/', getPeople);
router.post('/', createPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

export default router;
