(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/context/PostsContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PostsProvider": (()=>PostsProvider),
    "usePosts": (()=>usePosts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const PostsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const initialPosts = [
    {
        id: 1,
        title: "Building Modern Web Applications with Next.js",
        content: "Next.js provides an excellent developer experience with features like automatic routing, server-side rendering, and built-in CSS support. This makes it perfect for building production-ready applications. The framework offers file-based routing which automatically creates routes based on your file structure, eliminating the need for complex routing configurations. Server-side rendering improves SEO and initial page load performance, while the built-in API routes allow you to create backend functionality within the same project. Image optimization is handled automatically, providing lazy loading and responsive images out of the box.",
        date: "2024-01-15",
        author: "Alex Kumar",
        readTime: "5 min read",
        tags: [
            "Next.js",
            "React",
            "Web Development"
        ]
    },
    {
        id: 2,
        title: "Database Design Best Practices",
        content: "Learn how to structure your database schema effectively for scalability and performance. We'll cover normalization, indexing strategies, and query optimization techniques. Proper database design is crucial for application performance and maintainability. First normal form eliminates duplicate data, while third normal form ensures data integrity. Indexing strategies can dramatically improve query performance, but over-indexing can slow down write operations. Understanding when to denormalize for performance gains is also important in real-world applications.",
        date: "2024-01-12",
        author: "Sarah Patel",
        readTime: "8 min read",
        tags: [
            "Database",
            "SQL",
            "Performance"
        ]
    },
    {
        id: 3,
        title: "Modern CSS Techniques for Responsive Design",
        content: "Explore the latest CSS features like Grid, Flexbox, and container queries to create responsive layouts that work across all devices without media queries. CSS Grid provides two-dimensional layout control, while Flexbox excels at one-dimensional layouts. Container queries allow components to respond to their container size rather than viewport size, enabling truly modular responsive design. These techniques reduce the need for complex media query breakpoints and create more maintainable stylesheets.",
        date: "2024-01-10",
        author: "Rahul Sharma",
        readTime: "6 min read",
        tags: [
            "CSS",
            "Responsive",
            "Frontend"
        ]
    },
    {
        id: 4,
        title: "Understanding JavaScript Closures",
        content: "Closures are a fundamental concept in JavaScript that every developer should master. They provide a way to create private variables and maintain state in functional programming patterns. A closure gives you access to an outer function's scope from an inner function, even after the outer function has returned. This powerful feature enables patterns like module creation, callback functions, and event handlers. Understanding closures is essential for writing clean, efficient JavaScript code.",
        date: "2024-01-08",
        author: "Priya Singh",
        readTime: "7 min read",
        tags: [
            "JavaScript",
            "Programming",
            "Concepts"
        ]
    },
    {
        id: 5,
        title: "API Security Best Practices",
        content: "Securing your APIs is crucial in today's interconnected world. This guide covers authentication, authorization, rate limiting, and input validation techniques. Implement proper authentication using JWT tokens or OAuth 2.0, ensure all endpoints have appropriate authorization checks, and always validate and sanitize input data. Rate limiting prevents abuse and DDoS attacks, while HTTPS encryption protects data in transit. Regular security audits and penetration testing help identify vulnerabilities before they can be exploited.",
        date: "2024-01-05",
        author: "Amit Verma",
        readTime: "10 min read",
        tags: [
            "Security",
            "API",
            "Backend"
        ]
    }
];
function PostsProvider({ children }) {
    _s();
    const [posts, setPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPosts);
    const addPost = (newPost)=>{
        try {
            if (!newPost.title.trim() || !newPost.content.trim()) {
                throw new Error('Title and content are required');
            }
            const post = {
                ...newPost,
                id: Math.max(...posts.map((p)=>p.id), 0) + 1,
                date: new Date().toISOString().split('T')[0],
                readTime: `${Math.ceil(newPost.content.split(' ').length / 200)} min read`
            };
            setPosts((prevPosts)=>[
                    post,
                    ...prevPosts
                ]);
        } catch (error) {
            console.error('Error adding post:', error);
            throw error;
        }
    };
    const deletePost = (id)=>{
        try {
            setPosts((prevPosts)=>prevPosts.filter((post)=>post.id !== id));
        } catch (error) {
            console.error('Error deleting post:', error);
            throw error;
        }
    };
    const getPost = (id)=>{
        return posts.find((post)=>post.id === id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PostsContext.Provider, {
        value: {
            posts,
            addPost,
            deletePost,
            getPost
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/PostsContext.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s(PostsProvider, "6LYIuqiz1ip69S1k3Q18hpVCanQ=");
_c = PostsProvider;
function usePosts() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PostsContext);
    if (context === undefined) {
        throw new Error('usePosts must be used within a PostsProvider');
    }
    return context;
}
_s1(usePosts, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "PostsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_context_PostsContext_tsx_657af308._.js.map