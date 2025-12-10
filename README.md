# 🎯 Creative Campaigns Widget

A **production-ready, standalone widget** that works independently of your main application.

## ✨ Key Features

✅ **Completely Standalone** - No app context or router dependency  
✅ **Single Bundle** - One JavaScript file, ~150-200KB minified  
✅ **Token-Based Auth** - Secure API token authentication  
✅ **Easy Integration** - Just include script + 3 lines of config  
✅ **Works Anywhere** - Embed on any website or application  
✅ **White-Label Ready** - Customizable theme and styling  

## 🚀 Quick Start

### 1. Build the Widget
```bash
npm run build:widget
# Output: dist/creative-campaigns-widget.js
```

### 2. Upload to CDN
Upload `dist/creative-campaigns-widget.js` to your CDN.

### 3. Embed in HTML
```html
<!-- 1. Add container -->
<div id="creative-campaigns-widget"></div>

<!-- 2. Include script -->
<script src="https://your-cdn.com/creative-campaigns-widget.js"></script>

<!-- 3. Initialize -->
<script>
  window.CreativeCampaignsWidget.init({
    containerId: 'creative-campaigns-widget',
    token: 'your-api-token',
    baseUrl: 'https://your-api.com',
    userId: 'user-id',
    theme: 'light'
  });
</script>
```

## 📦 File Structure

```
src/widget/
├── widget-entry.tsx                    # Entry point & global export
├── StandaloneCreativeCampaigns.tsx      # Main component
├── api/
│   └── WidgetAPI.ts                    # Token-based API client
└── components/
    ├── StandaloneHeroHeader.tsx
    ├── StandaloneCreativeCampaignCreationBar.tsx
    └── StandaloneCreativeCampaignHubTable.tsx

Configuration:
├── vite.widget.config.ts               # Widget-specific Vite config
└── WIDGET_DOCUMENTATION.md             # Full documentation
```

## 🔧 Build Commands

```bash
# Build for production
npm run build:widget

# Build for development (with sourcemaps)
npm run build:widget:dev

# Build and watch for changes (live rebuild)
npm run build:widget:watch
```

## 🧪 Local Testing

### Option 1: Using Python
```bash
# Terminal 1: Watch and build
npm run build:widget:watch

# Terminal 2: Serve
python -m http.server 8000

# Browser: http://localhost:8000/widget-demo.html
```

### Option 2: Using Node
```bash
# Terminal 1: Watch and build
npm run build:widget:watch

# Terminal 2: Serve
npx http-server

# Browser: http://localhost:8080/widget-demo.html
```

The demo includes example initialization and full documentation.

## 🔐 Authentication

The widget uses **token-based authentication**:

1. **Get Token**: Your auth system generates a bearer token
2. **Pass Token**: Include in widget initialization
3. **Widget Uses Token**: All API calls include the token
4. **Backend Validates**: Your API validates the token

```javascript
window.CreativeCampaignsWidget.init({
  token: 'Bearer eyJhbGciOiJIUzI1NiIs...',
  // ... other config
});
```

## 📋 API Requirements

Your backend must implement these endpoints:

### Create Campaign (Keyword)
```
POST /generate-avatars
Authorization: Bearer {token}
X-User-ID: {userId}

{
  "keyword": "coffee machines",
  "id": "user-123",
  "country": "US",
  "start_brief_on_complete": false
}
```

### Create Campaign (ASIN)
```
POST /generate-avatars-for-asin
Authorization: Bearer {token}
X-User-ID: {userId}

{
  "asin": "B0123456789",
  "id": "user-123",
  "country": "US",
  "start_brief_on_complete": true
}
```

### Get Campaigns
```
GET /campaigns?page=0&limit=21&search=query
Authorization: Bearer {token}
X-User-ID: {userId}

Response: {
  "data": [...],
  "hasMore": true
}
```

### Delete Campaign
```
DELETE /campaigns/{id}
Authorization: Bearer {token}
X-User-ID: {userId}
```

## 🌍 Integration Examples

### Partner Portal
```html
<!-- On partner's website -->
<div class="dashboard">
  <div id="campaigns-widget"></div>
</div>

<script src="https://your-cdn.com/creative-campaigns-widget.js"></script>
<script>
  // Partner token obtained from login
  const token = sessionStorage.getItem('partner_token');
  
  window.CreativeCampaignsWidget.init({
    containerId: 'campaigns-widget',
    token: token,
    baseUrl: 'https://api.yourcompany.com',
    userId: getCurrentUserId(),
    theme: 'dark' // Match partner's theme
  });
</script>
```

### White-Label Integration
```html
<!-- Reseller's website - fully branded -->
<html>
  <head>
    <style>
      /* Override widget styles */
      #campaigns-widget button {
        background: linear-gradient(135deg, var(--brand-primary), var(--brand-secondary));
      }
    </style>
  </head>
  <body>
    <div id="campaigns-widget"></div>
    
    <script src="https://your-cdn.com/creative-campaigns-widget.js"></script>
    <script src="/reseller-init.js"></script>
  </body>
</html>
```

## 📊 Sizing & Performance

| Metric | Value |
|--------|-------|
| Minified Size | ~150-200 KB |
| Gzipped Size | ~40-50 KB |
| Load Time | <1s on 3G |
| Bundle Format | UMD (Universal Module Definition) |
| React Version | 18+ |
| Dependencies | React, React-DOM, Lucide Icons |

## ♿ Accessibility

The widget includes:
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ High contrast mode support

## 🎨 Theming

The widget supports light and dark themes:

```javascript
// Light theme (default)
window.CreativeCampaignsWidget.init({
  theme: 'light',
  // ...
});

// Dark theme
window.CreativeCampaignsWidget.init({
  theme: 'dark',
  // ...
});
```

To customize further:
```css
/* Override widget styles with CSS */
#creative-campaigns-widget {
  --primary-color: #007bff;
  --border-color: #ddd;
  --text-color: #333;
}
```

## 🔒 Security Checklist

- [ ] Use HTTPS only
- [ ] Validate token on backend
- [ ] Set short token expiration
- [ ] Implement token refresh
- [ ] Configure CORS properly
- [ ] Validate origin on backend
- [ ] Rate limit API endpoints
- [ ] Log widget usage
- [ ] Monitor for suspicious activity

## 🐛 Troubleshooting

### Widget not loading
```javascript
// Check if script loaded
console.log(window.CreativeCampaignsWidget);

// Check for errors
window.addEventListener('error', (e) => {
  console.error('Script error:', e);
});
```

### API calls failing
1. Check token is valid
2. Verify baseUrl is correct
3. Check browser Network tab
4. Verify Authorization header is sent
5. Check CORS configuration

### Styling issues
```css
/* Widget uses Tailwind CSS classes */
/* Override with higher specificity */
#creative-campaigns-widget .your-selector {
  color: red !important;
}
```

## 📚 Documentation

- **[WIDGET_DOCUMENTATION.md](./WIDGET_DOCUMENTATION.md)** - Complete technical documentation
- **[widget-demo.html](./widget-demo.html)** - Live demo with examples
- **[src/widget/](./src/widget/)** - Source code with JSDoc comments

## 🚢 Deployment Checklist

- [ ] Build widget: `npm run build:widget`
- [ ] Test locally with demo
- [ ] Verify all endpoints work
- [ ] Upload to CDN
- [ ] Update CDN URL in documentation
- [ ] Test from different domains (CORS)
- [ ] Monitor for errors in production
- [ ] Set up version tracking
- [ ] Document breaking changes

## 📞 Support

For help:
1. Check WIDGET_DOCUMENTATION.md
2. Review widget-demo.html
3. Check browser console for errors
4. Verify API endpoint responses
5. Test with curl: `curl -H "Authorization: Bearer {token}" https://your-api.com/campaigns`

## 📜 License

Same as main application.

---

**Ready to integrate?** Follow the Quick Start above! 🎉
