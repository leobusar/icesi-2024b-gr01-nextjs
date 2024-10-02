import { Navbar } from "@/components";


export default function GeneralLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
            </main>
        </div>
        
    );
    }