import { UserProps } from '../types';
import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import {Collection} from './Collection'

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
	static buildUser(attrs: UserProps): User {
		return new User(
			new Attributes<UserProps>(attrs),
			new Eventing(),
			new ApiSync<UserProps>(rootUrl)
		);

	}
  static buildUserCollection():Collection<User,UserProps>{
    return new Collection<User,UserProps>(,rootUrl,(json:UserProps)=>User.buildUser(json));
  }

	setNewName(newName:string):void{
		const name = newName;
		this.set({name:name})
	}

	setNewAge(newAge:string):void{
		const age = parseInt(newAge);
		this.set({age:age})
	}

}
