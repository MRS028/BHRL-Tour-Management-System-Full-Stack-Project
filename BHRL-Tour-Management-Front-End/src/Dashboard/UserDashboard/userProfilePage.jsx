import React, { useState } from "react";

// --- MOCK LUCIDE-REACT ICONS ---
// In a real project, you would import these from 'lucide-react'
const User = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>;
const MapPin = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>;
const Mail = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>;
const Phone = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
const CalendarDays = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>;
const Edit3 = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>;
const CheckCircle = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>;
const PlaneTakeoff = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 22h20"/><path d="M6.36 17.4 4 17l-2-4 2.1.81a2 2 0 0 0 1.84-2.34L4.2 8.5l2.5-.43a2 2 0 0 0 1.5-1.5L9.5 4.2a2 2 0 0 1 3.9 0l1.28 2.37a2 2 0 0 0 1.5 1.5l2.5.43-1.73 2.95a2 2 0 0 0 1.84 2.34L22 13l-2 4-2.36-.4a2 2 0 0 0-1.28 0L14 17l-2.36.4a2 2 0 0 1-1.28 0Z"/></svg>;
const History = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>;

// --- MOCK UI COMPONENTS (SHADCN/UI STYLE) ---
const Card = ({ className, ...props }) => <div className={`rounded-xl border bg-white text-slate-900 shadow-sm ${className}`} {...props} />;
const CardHeader = ({ className, ...props }) => <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props} />;
const CardTitle = ({ className, ...props }) => <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props} />;
const CardContent = ({ className, ...props }) => <div className={`p-6 pt-0 ${className}`} {...props} />;
const Avatar = ({ className, ...props }) => <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`} {...props} />;
const AvatarImage = ({ className, ...props }) => <img className={`aspect-square h-full w-full ${className}`} {...props} />;
const AvatarFallback = ({ className, ...props }) => <span className={`flex h-full w-full items-center justify-center rounded-full bg-slate-100 text-slate-500 ${className}`} {...props} />;
const Button = ({ children, className, variant, ...props }) => {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-600/90",
    outline: "border border-slate-200 hover:bg-slate-100",
    ghost: "hover:bg-slate-100",
  };
  return <button className={`${base} ${variants[variant] || variants.default} ${className}`} {...props}>{children}</button>;
};
const Input = React.forwardRef(({ className, ...props }, ref) => <input className={`flex h-10 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} ref={ref} {...props} />);
const Label = ({ className, ...props }) => <label className={`text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props} />;
const Separator = ({ className, ...props }) => <div className={`shrink-0 bg-slate-200 h-[1px] w-full ${className}`} {...props} />;
const Toast = ({ message, onDismiss }) => {
    if (!message) return null;
    return (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-in">
            <CheckCircle className="w-6 h-6" />
            <div>
                <p className="font-bold">Success</p>
                <p>{message}</p>
            </div>
        </div>
    );
};

// --- DATA ---
const upcomingTrips = [
    {
        id: 1,
        title: "Amazon Rainforest Expedition",
        location: "Brazil",
        duration: "7 Days / 6 Nights",
        date: "Sept 15, 2025",
        status: "Confirmed",
        statusColor: "bg-green-100 text-green-800",
    },
    {
        id: 2,
        title: "Kyoto Cherry Blossom Tour",
        location: "Japan",
        duration: "5 Days / 4 Nights",
        date: "Mar 28, 2026",
        status: "Pending",
        statusColor: "bg-yellow-100 text-yellow-800",
    },
];

const bookingHistory = [
    { id: 1, title: "European Cities Explorer", location: "Paris, Rome, Barcelona", duration: "10 Days", date: "June 2025" },
    { id: 2, title: "Tropical Beach Retreat", location: "Maldives", duration: "6 Days", date: "March 2025" },
    { id: 3, title: "New Zealand Adventure", location: "Queenstown & Milford Sound", duration: "14 Days", date: "Nov 2024" },
];

// --- MAIN COMPONENT ---
const UserProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [profile, setProfile] = useState({
        name: "Alex Traveler",
        location: "New York, USA",
        email: "alex.traveler@example.com",
        phone: "+1 234-567-890",
        avatar: "https://i.pravatar.cc/150?img=55",
    });
    const [tempProfile, setTempProfile] = useState(profile);

    const handleEditToggle = () => {
        setTempProfile(profile); // Reset temp profile on toggle
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProfile(tempProfile);
        setIsEditing(false);
        setToastMessage("Profile updated successfully!");
        setTimeout(() => setToastMessage(""), 3000); // Hide toast after 3 seconds
    };

    const ProfileInfoItem = ({ icon, value, name, isEditing, onChange }) => (
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 text-center">
                {React.cloneElement(icon, { className: "w-5 h-5 text-slate-500" })}
            </div>
            <div className="flex-grow">
                {isEditing ? (
                    <Input id={name} name={name} value={value} onChange={onChange} className="h-8 text-sm" />
                ) : (
                    <p className="text-slate-800 text-sm">{value}</p>
                )}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen  border m-4 rounded-2xl p-4 sm:p-6 lg:p-8">
            <Toast message={toastMessage} />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-1 space-y-8">
                    <Card as="form" onSubmit={handleSubmit}>
                        <CardHeader className="flex-row items-center justify-between">
                            <CardTitle className="text-xl">My Profile</CardTitle>
                            <Button variant="ghost" size="sm" type={isEditing ? "submit" : "button"} onClick={!isEditing ? handleEditToggle : undefined}>
                                {isEditing ? "Save" : <><Edit3 className="w-4 h-4 mr-2" /> Edit</>}
                            </Button>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex flex-col items-center space-y-4">
                                <Avatar className="h-24 w-24 border-4 border-white shadow-md">
                                    <AvatarImage src={profile.avatar} alt="User Avatar" />
                                    <AvatarFallback>AT</AvatarFallback>
                                </Avatar>
                                {isEditing ? (
                                    <Input name="name" value={tempProfile.name} onChange={handleChange} className="text-center text-xl font-bold h-10" />
                                ) : (
                                    <h2 className="text-2xl font-bold text-slate-900">{profile.name}</h2>
                                )}
                            </div>
                            <Separator />
                            <div className="space-y-4">
                                <ProfileInfoItem icon={<MapPin />} value={tempProfile.location} name="location" isEditing={isEditing} onChange={handleChange} />
                                <ProfileInfoItem icon={<Mail />} value={tempProfile.email} name="email" isEditing={isEditing} onChange={handleChange} />
                                <ProfileInfoItem icon={<Phone />} value={tempProfile.phone} name="phone" isEditing={isEditing} onChange={handleChange} />
                            </div>
                            {isEditing && (
                                <div className="flex justify-end">
                                    <Button variant="outline" size="sm" type="button" onClick={() => setIsEditing(false)}>Cancel</Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-2 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-xl"><PlaneTakeoff className="w-6 h-6 text-blue-600" />Upcoming Trips</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {upcomingTrips.map(trip => (
                                <div key={trip.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border rounded-lg hover:bg-slate-50/80 transition-colors">
                                    <div>
                                        <h4 className="font-semibold text-slate-800">{trip.title}</h4>
                                        <p className="text-sm text-slate-500">{trip.location} • {trip.duration}</p>
                                        <p className="text-sm text-slate-500 flex items-center gap-2 mt-1"><CalendarDays className="w-4 h-4" />Starts: {trip.date}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${trip.statusColor}`}>{trip.status}</span>
                                        <Button variant="outline" size="sm">View Booking</Button>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-xl"><History className="w-6 h-6 text-blue-600" />Booking History</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            {bookingHistory.map((item, index) => (
                                <React.Fragment key={item.id}>
                                    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50/80 transition-colors">
                                        <div>
                                            <h4 className="font-semibold text-slate-800">{item.title}</h4>
                                            <p className="text-sm text-slate-500">{item.location}</p>
                                        </div>
                                        <p className="text-sm text-slate-500">Completed: {item.date}</p>
                                    </div>
                                    {index < bookingHistory.length - 1 && <Separator />}
                                </React.Fragment>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </div>
            <style jsx global>{`
                @keyframes slide-in {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .animate-slide-in {
                    animation: slide-in 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                }
            `}</style>
        </div>
    );
};

export default UserProfilePage;
