import toast from 'react-hot-toast';

export const notify = (message: string, type: 'warn' | 'error' | 'success') => {
  if (type === 'warn') {
    toast(message, {
      icon: '⚠️',
      style: {
        borderRadius: '10px',
        background: '#FBBF24',
        color: '#1F2937',
      },
    });
  } else if (type === 'error') {
    toast.error(message, {
      style: {
        borderRadius: '10px',
        background: '#EF4444',
        color: '#F3F4F6',
      },
    });
  } else if (type === 'success') {
    toast.success(message, {
      style: {
        borderRadius: '10px',
        background: '#10B981',
        color: '#F3F4F6',
      },
    });
  }
};
