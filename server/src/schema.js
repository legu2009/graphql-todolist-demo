const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        me: User
    }
    type Subscription {
        memberLeave: MemberLeaveResponse
    }
    type Mutation {
        login(email: String): LoginResponse!
        updateMyName(name: String!): UserResponse!
        addWorkSpace(name: String!): WorkSpaceResponse!
        updateWorkSpaceName(WorkSpace: WorkSpaceNameInput!): WorkSpaceResponse!
        deleteWorkSpace(id: ID!): DeleteResponse!
        addWorkSpaceMembers(id: ID!, emails: [String!]!): WorkSpaceResponse!
        deleteWorkSpaceMembers(id: ID!, emails: [String!]!): WorkSpaceResponse!
    }
    type User {
        id: ID!
        email: String
        name: String
        myWorkSpaces: [WorkSpace]!
        JoinedWorkSpaces: [WorkSpace]!
    }
    type WorkSpace {
        id: ID!
        name: String!
        owner: User!
        members: [User]!
    }

    interface Response {
		code: Int!
        success: Boolean!
        message: String!
    }

    type MemberLeaveResponse {
        id: ID!
        emails: [String!]!
    }

    type DeleteResponse implements Response {
		code: Int!
        success: Boolean!
        message: String!
    }

    type LoginResponse implements Response {
		code: Int!
        success: Boolean!
        message: String!
        token: String!
    }

    type UserResponse implements Response {
		code: Int!
        success: Boolean!
        message: String!
        me: User
    }

    type WorkSpaceResponse implements Response {
		code: Int!
        success: Boolean!
        message: String!
        workSpace: WorkSpace
    }

    input WorkSpaceNameInput {
        id: ID!
        name: String!
    }
`;

const typeDefsStr = '';

module.exports = {
    typeDefs,
    typeDefsStr
};
