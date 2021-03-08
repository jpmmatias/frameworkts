import { UserShow } from './UserShow';
import { UserProps } from './../types.d';
import { User } from './../models/User';
import { CollectionView } from './CollectionView';

export class UserList extends CollectionView<User, UserProps> {
	renderItem(model: User, itemParent: Element): void {
		new UserShow(itemParent, model).render();
	}
}
