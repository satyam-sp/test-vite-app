import { v4 as uuidv4 } from 'uuid';
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import { randomDate } from '../utils/helper';

export const assigneeOptions= [{
    id: 1,
    name: 'Jack',
    color: 'blue'

}, {
    id: 2,
    name: 'Liyon',
    color: 'pink',
}, {
    id: 3,
    name: 'Ada',
    color: 'yellow'
}]
export const tasks = {
    todos: [
        {
            id: uuidv4(),
            title: 'Fix bug #42: modal not closing on ESC',
            content: 'Ensure ESC key closes all modal types.',
            image: image1,
            date: randomDate,
            assignee: 1
        },
        {
            id: uuidv4(),
            title: 'Build reusable Button component',
            content: 'With variants: primary, secondary, outline.',
            image: image2,
            date: randomDate,
            assignee: 3

        },
        {
            id: uuidv4(),
            title: 'Write unit tests for cart reducer',
            content: 'Test add, remove, increment, and reset actions.',
            image: image3,
            date: randomDate,
            assignee: 2

        },
        {
            id: uuidv4(),
            title: 'Integrate Google Sign-In auth flow',
            content: 'Using OAuth2, handle errors and token storage.',
            image: image1,
            date: randomDate,
            assignee: 1

        }],
    progress: [{
        id: uuidv4(),
        title: 'Create product API with pagination',
        content: 'REST endpoint /api/products with limit and offset.',
        image: image3,
        date: randomDate,
        assignee: 3

    },
    {
        id: uuidv4(),
        title: 'Setup CI with GitHub Actions',
        content: 'Run tests and linter on every PR.',
        image: image1,
        date: randomDate,
        assignee: 1

    }],
    review: [{
        id: uuidv4(),
        title: 'Implement Redis cache for product list',
        content: 'Cache by query string and set TTL of 5 minutes.',
        image: image2,
        date: randomDate,
        assignee: 3


    },
    {
        id: uuidv4(),
        title: 'Redesign mobile navigation bar',
        content: 'Add icons, bottom placement, and ensure accessibility.',
        image: image2,
        date: randomDate,
        assignee: 2


    }],
    done: [{
        id: uuidv4(),
        title: 'Create user profile card layout',
        content: 'Include avatar, username, email, and edit button.',
        image: image3,
        date: randomDate,
        assignee: 2

    },
    {
        id: uuidv4(),
        title: 'Design login UI',
        content: 'Create a responsive login form with validation states and remember-me functionality.',
        image: image1,
        date: randomDate,
        assignee: 1

    },
    ],
};
