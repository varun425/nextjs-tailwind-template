# Create the src directory and main subdirectories
mkdir -p src/components src/contexts src/hooks src/pages src/services src/styles

# Create component files
touch src/components/PostCard.tsx
touch src/components/CommentBox.tsx
touch src/components/UserProfile.tsx
touch src/components/Navbar.tsx
touch src/components/Notification.tsx

# Create context files
touch src/contexts/AuthContext.tsx
touch src/contexts/MessageContext.tsx
touch src/contexts/NotificationContext.tsx

# Create hook files
touch src/hooks/useAuth.tsx
touch src/hooks/usePosts.tsx
touch src/hooks/useMessages.tsx
touch src/hooks/useNotifications.tsx

# Create pages and dynamic routes
touch src/pages/_app.tsx
touch src/pages/_document.tsx
touch src/pages/index.tsx
touch src/pages/login.tsx
touch src/pages/register.tsx
touch src/pages/profile.tsx
touch src/pages/messages.tsx
touch src/pages/notifications.tsx
touch src/pages/post/[id].tsx
touch src/pages/search.tsx

# Create services files
touch src/services/authService.ts
touch src/services/postService.ts
touch src/services/messageService.ts
touch src/services/notificationService.ts

# Create the styles folder and add the main styles file
mkdir src/styles
touch src/styles/globals.css


# Create main app entry point
touch src/App.tsx
touch src/index.tsx


