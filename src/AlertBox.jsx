import { Toaster } from 'react-hot-toast';
export default function AlertBox() {
  return (
    <Toaster 
        position="top-center"
        reverseOrder={false}
        gutter={8}
        // containerClassName="bg-dark" 
        containerStyle={{}}
        toastOptions={{
             // Define default options
                className: 'shadow ml-auto', 
                duration: 2000,
                style: {
                background: '#363636',
                color: '#fff',
            },
            // Default options for specific types
            success: {
                className : "bg-success shadow ml-auto"
            },
            error: {
                className : "bg-danger shadow ml-auto"
            },
        }} 
    />
  )
}
