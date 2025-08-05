import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { toast } from "sonner";
import useScrollToTop from "@/Hooks/useScrollToTop";
import useAuth from "@/Hooks/useAuth";

// --- MOCK LUCIDE-REACT ICONS ---
// In a real project, you would import these from 'lucide-react'
const Plane = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>;
const Users = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const Info = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>;
const CreditCard = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>;
const CalendarIcon = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>;
const Check = (props) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12" /></svg>;

// --- FORM VALIDATION SCHEMA ---
const schema = z.object({
  tripType: z.enum(["one-way", "round-trip"]),
  adults: z.number().min(1, "At least one adult is required"),
  children: z.number().min(0),
  departure: z.string().min(3, "Departure city is required"),
  destination: z.string().min(3, "Destination city is required"),
  departureDate: z.date({ required_error: "Please select a departure date." }),
  returnDate: z.date().optional(),
  class: z.enum(["economy", "business", "first"]),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
}).refine(data => {
    if (data.tripType === 'round-trip') {
        return !!data.returnDate;
    }
    return true;
}, {
    message: "Return date is required for round trips",
    path: ["returnDate"],
}).refine(data => {
    if (data.tripType === 'round-trip' && data.returnDate) {
        return data.returnDate > data.departureDate;
    }
    return true;
}, {
    message: "Return date must be after departure date",
    path: ["returnDate"],
});


// --- MOCK UI COMPONENTS (SHADCN/UI STYLE) ---
const Button = ({ children, className, ...props }) => (
  <button className={`inline-flex  items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-slate-900 text-slate-50 hover:bg-slate-900/90 h-10 px-4 py-2 ${className}`} {...props}>
    {children}
  </button>
);

const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input className={`flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} ref={ref} {...props} />
));

const Label = ({ children, className, ...props }) => (
    <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props}>
        {children}
    </label>
);

const RadioGroup = ({ options, name, control, onChange: onValueChange }) => (
    <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <div className="flex items-center space-x-2">
                {options.map(option => (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                            field.onChange(option.value);
                            if (onValueChange) onValueChange(option.value);
                        }}
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                            field.value === option.value
                                ? 'bg-yellow-600 text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        )}
    />
);

const Popover = ({ trigger, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = React.useRef(null);

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={popoverRef}>
            <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
            {isOpen && (
                <div className="absolute z-10 mt-2 w-auto bg-white border rounded-md shadow-lg">
                    {React.cloneElement(children, { setIsOpen })}
                </div>
            )}
        </div>
    );
};

const Calendar = ({ selected, onSelect, setIsOpen }) => {
    // This is a simplified calendar. A real one would be much more complex.
    const [currentDate, setCurrentDate] = useState(selected || new Date());

    const handleDayClick = (day) => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        onSelect(newDate);
        if (setIsOpen) setIsOpen(false);
    };

    const month = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    return (
        <div className="p-3">
            <div className="flex justify-between items-center mb-2">
                <button type="button" onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}>&lt;</button>
                <div className="font-semibold">{month}</div>
                <button type="button" onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}>&gt;</button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className="font-medium text-slate-500">{d}</div>)}
                {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`empty-${i}`}></div>)}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const isSelected = selected && selected.getDate() === day && selected.getMonth() === currentDate.getMonth();
                    return (
                        <button
                            type="button"
                            key={day}
                            onClick={() => handleDayClick(day)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                isSelected ? 'bg-yellow-600 text-white' : 'hover:bg-slate-100'
                            }`}
                        >
                            {day}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
    <button
        type="button"
        role="checkbox"
        aria-checked={props.checked}
        onClick={props.onClick}
        className={`peer h-4 w-4 shrink-0 rounded-sm border border-slate-400 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${props.checked ? 'bg-yellow-600 text-white' : 'bg-white'} ${className}`}
        ref={ref}
    >
        {props.checked && <Check className="h-3 w-3" />}
    </button>
));

const Toaster = ({ message }) => {
    if (!message) return null;
    return (
        <div className="relative top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out">
            <p className="font-bold">Success!</p>
            <p>{message}</p>
        </div>
    );
};

// --- MAIN FORM COMPONENT ---
const TravelBookingForm = () => {
  const [tripType, setTripType] = useState("one-way");
  const [toastMessage, setToastMessage] = useState("");
  useScrollToTop();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      tripType: "one-way",
      adults: 1,
      children: 0,
      class: "economy",
      terms: false,
    },
  });

  const {user} = useAuth();
  
  const email = user.email;
  console.log(email);

  const departureDate = watch("departureDate");
  const returnDate = watch("returnDate");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // setToastMessage("Your booking has been successfully submitted!");
    toast.success("Your booking has been successfully submitted!");
    // setTimeout(() => setToastMessage(""), 4000);
  };

  const FormSection = ({ title, icon, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200/80">
        <div className="flex items-center gap-3 mb-4">
            {icon}
            <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
        </div>
        <div className="space-y-4">{children}</div>
    </div>
  );

  return (
    <div className=" min-h-screen p-4 sm:p-6 md:p-8">
      <Toaster message={toastMessage} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-7xl mx-auto space-y-8"
      >
        <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Plan Your Next Trip</h1>
            <p className="mt-2 text-slate-600">Fill out the form below to book your flight.</p>
        </div>

        <FormSection title="Flight Details" icon={<Plane className="w-6 h-6 text-yellow-600"/>}>
            <div className="space-y-2">
                <Label>Trip Type</Label>
                <RadioGroup 
                    name="tripType"
                    control={control}
                    options={[
                        { value: "one-way", label: "One Way" },
                        { value: "round-trip", label: "Round Trip" },
                    ]}
                    onChange={setTripType}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="departure">From</Label>
                    <Input id="departure" placeholder="e.g., New York (JFK)" {...register("departure")} />
                    {errors.departure && <p className="text-red-500 text-xs mt-1">{errors.departure.message}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="destination">To</Label>
                    <Input id="destination" placeholder="e.g., London (LHR)" {...register("destination")} />
                    {errors.destination && <p className="text-red-500 text-xs mt-1">{errors.destination.message}</p>}
                </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Controller
                    name="departureDate"
                    control={control}
                    render={({ field }) => (
                        <div className="space-y-2">
                            <Label>Departure Date</Label>
                            <Popover
                                trigger={
                                    <button type="button" className="w-full flex items-center justify-between h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                                        {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                        <CalendarIcon className="h-4 w-4 text-slate-500" />
                                    </button>
                                }
                            >
                                <Calendar selected={field.value} onSelect={field.onChange} />
                            </Popover>
                            {errors.departureDate && <p className="text-red-500 text-xs mt-1">{errors.departureDate.message}</p>}
                        </div>
                    )}
                />
                {tripType === "round-trip" && (
                    <Controller
                        name="returnDate"
                        control={control}
                        render={({ field }) => (
                            <div className="space-y-2">
                                <Label>Return Date</Label>
                                <Popover
                                    trigger={
                                        <button type="button" className="w-full flex items-center justify-between h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
                                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                            <CalendarIcon className="h-4 w-4 text-slate-500" />
                                        </button>
                                    }
                                >
                                    <Calendar selected={field.value} onSelect={field.onChange} />
                                </Popover>
                                {errors.returnDate && <p className="text-red-500 text-xs mt-1">{errors.returnDate.message}</p>}
                            </div>
                        )}
                    />
                )}
            </div>
        </FormSection>

        <FormSection title="Passenger Information" icon={<Users className="w-6 h-6 text-yellow-600"/>}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="adults">Adults (12+)</Label>
                    <Input id="adults" type="number" min={1} {...register("adults", { valueAsNumber: true })} />
                    {errors.adults && <p className="text-red-500 text-xs mt-1">{errors.adults.message}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="children">Children (2-11)</Label>
                    <Input id="children" type="number" min={0} {...register("children", { valueAsNumber: true })} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="class">Travel Class</Label>
                    <Controller
                        name="class"
                        control={control}
                        render={({ field }) => (
                            <select {...field} className="flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                <option value="economy">Economy</option>
                                <option value="business">Business</option>
                                <option value="first">First Class</option>
                            </select>
                        )}
                    />
                </div>
            </div>
        </FormSection>

    
          {/* Payment Method Section */}
        <FormSection title="Contact & Payment" icon={<CreditCard className="w-6 h-6 text-yellow-600" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" disabled defaultValue={email} type="email" placeholder="you@example.com" {...register("email")} />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="(123) 456-7890" {...register("phone")} />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="payment">Payment Method</Label>
            <Controller
              name="payment"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  id="payment"
                  className="flex h-10 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="card">Credit / Debit Card</option>
                  <option value="bkash">bKash</option>
                  <option value="nagad">Nagad</option>
                  <option value="rocket">Rocket</option>
                  <option value="paypal">PayPal</option>
                </select>
              )}
            />
            {errors.payment && <p className="text-red-500 text-xs mt-1">{errors.payment.message}</p>}
          </div>
        </FormSection>

        <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-slate-200/80">
            <Controller
                name="terms"
                control={control}
                render={({ field }) => (
                    <div className="flex items-start space-x-3">
                        <Checkbox id="terms" checked={field.value} onClick={() => field.onChange(!field.value)} />
                        <div className="grid gap-1.5 leading-none">
                            <Label htmlFor="terms" className="font-medium">
                                Accept terms and conditions
                            </Label>
                            <p className="text-xs text-slate-500">
                                You agree to our Terms of Service and Privacy Policy.
                            </p>
                        </div>
                    </div>
                )}
            />
            {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms.message}</p>}
        </div>

        <Button type="submit" className="w-full text-lg font-semibold h-12 bg-yellow-600 hover:bg-yellow-700">
          Book Trip
        </Button>
      </form>
      <style jsx global>{`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(-20px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-20px); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 4s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

// --- App Component to Render the Form ---
export default function App() {
    return <TravelBookingForm />;
}
