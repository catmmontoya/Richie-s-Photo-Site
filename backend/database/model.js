import { DataTypes, Model } from "sequelize";
import connectToDB from "./db.js";
import util from "util";

export const db = await connectToDB(`postgresql:///richiephotos`);

class Item extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Item.init(
  {
    itemId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    picture: {
      type: DataTypes.TEXT,
    },
    itemName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "item",
    sequelize: db,
  }
);

class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userEmail: {
      type: DataTypes.STRING(40),
      allowNull: false,
      required: true,
      unique: true,
    },
  },
  {
    modelName: "user",
    sequelize: db,
  }
);

class Admin extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Admin.init(
  {
    adminId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
      required: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      required: true,
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
      required: true,
    },
  },
  {
    modelName: "admin",
    sequelize: db,
  }
);

class Order extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Order.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "order",
    sequelize: db,
    timestamps: true,
    createdAt: true,
  }
);

export { Item, User, Admin, Order };
