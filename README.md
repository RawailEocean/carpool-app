# Carpool - Share Rides, Share Costs, Make Friends

A modern carpooling web application that connects drivers and passengers for shared rides, focusing on companionship and cost-sharing rather than traditional taxi services.

## 🚗 Features

### Core Functionality
- **User Authentication** - Secure login and registration system
- **Ride Posting** - Drivers can post their planned trips with details
- **Ride Searching** - Passengers can search for available rides by location and date
- **Real-time Matching** - Connect drivers and passengers based on routes
- **Cost Calculation** - Automatic fuel cost splitting between passengers
- **User Profiles** - Detailed profiles with ratings and vehicle information
- **Real-time Chat** - Communication between matched users

### User Experience
- **Modern UI/UX** - Beautiful, responsive design with Tailwind CSS
- **Mobile-First** - Optimized for mobile and desktop devices
- **Real-time Updates** - Live notifications and status updates
- **Safety Features** - User verification and rating system
- **Flexible Scheduling** - Post rides in advance or find last-minute companions

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **Maps**: React Map GL (Mapbox)
- **Database**: Firebase (planned)
- **Authentication**: Firebase Auth (planned)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd carpool
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Usage

### For Drivers
1. **Register/Login** - Create an account and specify your vehicle details
2. **Post a Ride** - Share your planned trip with departure/destination, date, time, and price
3. **Manage Requests** - Review and accept passenger requests
4. **Travel Together** - Enjoy the journey with new companions

### For Passengers
1. **Register/Login** - Create an account with your preferences
2. **Search Rides** - Find available rides to your destination
3. **Request Rides** - Send requests to drivers and coordinate details
4. **Travel Together** - Split costs and make new friends

## 🏗️ Project Structure

```
carpool/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── login/             # Authentication pages
│   ├── register/
│   └── dashboard/         # Main app dashboard
├── components/            # Reusable components
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6) - Main brand color
- **Secondary**: Green (#22C55E) - Success and action buttons
- **Neutral**: Gray scale for text and backgrounds

### Components
- **Cards**: Clean, elevated containers with shadows
- **Buttons**: Consistent styling with hover states
- **Forms**: Accessible input fields with validation
- **Navigation**: Responsive header and tab navigation

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Firebase Configuration (for future implementation)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

# Mapbox Configuration (for maps)
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **Railway**: Supports Next.js out of the box
- **AWS Amplify**: Full-stack deployment solution

## 🔮 Future Enhancements

### Planned Features
- **Real-time Chat** - In-app messaging between users
- **Payment Integration** - Secure payment processing
- **Push Notifications** - Real-time ride updates
- **Advanced Matching** - AI-powered ride matching
- **Safety Features** - Emergency contacts and ride tracking
- **Social Features** - User reviews and recommendations

### Technical Improvements
- **Database Integration** - Firebase Firestore for data persistence
- **Real-time Updates** - WebSocket connections for live updates
- **Mobile App** - React Native version
- **API Development** - RESTful API with proper authentication
- **Testing** - Unit and integration tests

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon set
- **React Hook Form** - For efficient form handling

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Contact the development team
- Check the documentation

---

**Happy Carpooling! 🚗💨** 