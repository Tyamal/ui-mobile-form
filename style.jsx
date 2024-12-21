export default function Widget() {
    return (
        <div className="bg-background text-primary-foreground min-h-screen p-4 md:p-8">
            <h1 className="text-3xl font-bold mb-4">Health Care Form</h1>
        <form className="bg-card p-4 md:p-8 rounded-lg">
            <label htmlFor="name" className="block text-sm font-medium text-primary-foreground">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" className="w-full bg-input text-primary-foreground rounded-md p-2 mb-4" required>
            
            <label htmlFor="email" className="block text-sm font-medium text-primary-foreground">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" className="w-full bg-input text-primary-foreground rounded-md p-2 mb-4" required>
            
            <label htmlFor="phone" className="block text-sm font-medium text-primary-foreground">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" className="w-full bg-input text-primary-foreground rounded-md p-2 mb-4" required>
            
            <label htmlFor="message" className="block text-sm font-medium text-primary-foreground">Message</label>
            <textarea id="message" name="message" placeholder="Enter your message" className="w-full bg-input text-primary-foreground rounded-md p-2 mb-4 h-24" required></textarea>
            
            <button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-md py-2 px-4">Submit</button>
        </form>
        </div>
    )
}
