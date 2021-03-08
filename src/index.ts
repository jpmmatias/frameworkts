import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const root = document.getElementById('root');

const user = User.buildUser({ name: 'NAME', age: 0 });

if (root) {
	const form = new UserEdit(root, user);

	form.render();
} else {
	throw new Error('Root Element not found');
}
