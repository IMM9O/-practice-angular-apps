import { IUser } from 'src/models/IUser';

export class UserMiddleware {
  public static updateItem(array: IUser[], action: IUser) {
    return array.map((item, index) => {
      if (item.id !== action.id) {
        // This isn't the item we care about - keep it as-is
        return item;
      }
      // Otherwise, this is the one we want - return an updated value
      return {
        ...item,
        ...action
      };
    });
  }

  public static removeItem(array: IUser[], action: IUser) {
    return array.filter((item, index) => item.id !== action.id);
  }
}
