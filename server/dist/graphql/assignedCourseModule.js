"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignedCourseModule = void 0;
const graphql_modules_1 = require("graphql-modules");
const Course_1 = require("../entities/Course");
exports.assignedCourseModule = (0, graphql_modules_1.createModule)({
    id: 'assigned-course-module',
    dirname: __dirname,
    typeDefs: [
        (0, graphql_modules_1.gql) `
      type Query {
        getCourses(teacherId: Int): [Course]
      }

      type Course {
        id: Int
        name: String
        teacher: Int
      }
    `,
    ],
    resolvers: {
        Query: {
            getCourses: (_, { teacherId }, { orm }) => __awaiter(void 0, void 0, void 0, function* () {
                const courses = yield orm.em.find(Course_1.Course, { teacher: teacherId });
                return courses.map((course) => (Object.assign(Object.assign({}, course), { teacher: course.teacher.id })));
            }),
        },
    },
});
//# sourceMappingURL=assignedCourseModule.js.map