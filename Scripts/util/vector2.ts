module util {
    export class Vector2 extends createjs.Point {
        // private instance variables

        // public properties

        // constructor
        constructor(x:number = 0, y:number = 0) {
            super(x, y);
        }

        // private methods

        // public methods

        /**
         * This method returns the Euclidean Distance between vec1 and vec2
         *
         * @static
         * @param {util.Vector2} vec1
         * @param {util.Vector2} vec2
         * @returns {number}
         */
        public static Distance(vec1:util.Vector2, vec2:util.Vector2):number {
            return Math.floor(Math.sqrt(Math.pow(vec2.x - vec1.x, 2) + Math.pow(vec2.y - vec1.y, 2)));
        }

        /**
         * This method returns the resultant vector when adding vec1 and vec2
         *
         * @static
         * @param {util.Vector2} vec1
         * @param {util.Vector2} vec2
         * @returns {util.Vector2}
         */
        public static Add(vec1:util.Vector2, vec2:util.Vector2):util.Vector2 {

            let result:util.Vector2 = new util.Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
            return result;
        }

        /**
         * This method subtracts vec2 from vec1 and returns a Vector2 result
         *
         * @static
         * @param {util.Vector2} vec1
         * @param {util.Vector2} vec2
         * @returns {util.Vector2}
         */
        public static Subtract(vec1:util.Vector2, vec2:util.Vector2):util.Vector2 {

            let result:util.Vector2 = new util.Vector2(vec1.x - vec2.x, vec1.y - vec2.y);
            return result;
        }

        /**
         * This method multiplies a Vector2 object by a scalar and returns the result
         * as a new Vector2 object
         *
         * @static
         * @param {util.Vector2} vec1
         * @param {number} scalar
         * @returns {util.Vector2}
         */
        public static Mulitply(vec1:util.Vector2, scalar:number):util.Vector2 {
            return new util.Vector2(vec1.x * scalar, vec1.y * scalar);
        }

        /**
         * This method Divides a Vector2 object by a scalar and returns the result
         * as a new Vector2 object
         *
         * @static
         * @param {util.Vector2} vec1
         * @param {number} scalar
         * @returns {util.Vector2}
         * @memberof Vector2
         */
        public static Divide(vec1:util.Vector2, scalar:number):util.Vector2 {
            return new util.Vector2(vec1.x / scalar, vec1.y / scalar);
        }


        // Convenience Methods


        public static up():util.Vector2 {
            return new util.Vector2(0, -1);
        }

        public static down():util.Vector2 {
            return new util.Vector2(0, 1);
        }

        public static right():util.Vector2 {
            return new util.Vector2(1, 0);
        }

        public static left():util.Vector2 {
            return new util.Vector2(-1, 0);
        }

        public static zero():util.Vector2 {
            return new util.Vector2(0, 0);
        }
    }
}