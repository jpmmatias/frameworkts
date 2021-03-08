import { UserProps } from './../types.d';
import { View } from './View';
import { User } from '../models/User';

export class UserShow extends View<User, UserProps> {
	template(): string {
		return `
    <div>
      <h1>User Details</h1>
      <div>User Name: ${this.model.get('name')}</div>
      <div>User Age: ${this.model.get('age')}</div>
    </div>
    `;
	}
}
