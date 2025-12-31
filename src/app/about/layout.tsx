export default function Contact({
    children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
    <html lang="en">
    <body>
        <h1 className="text-center text-3xl font-mono mt-4">I am Main layout page </h1>
        {children}
    </body>
    </html>
);
}
