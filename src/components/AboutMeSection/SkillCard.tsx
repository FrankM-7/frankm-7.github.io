import React, { useEffect } from 'react';

type SkillCardProps = {
    icon: string;
    title: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ icon, title }) => {
    useEffect(() => {
        console.log(`SkillCard mounted with title: ${title}`);
        console.log(`SkillCard mounted with icon: ${icon}`);
    }, []);
    return (
        <div
            style={{
                border: '3px solid #e5e7eb',
                borderRadius: 6,
                padding: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
                minWidth: 150,
            }}
        >
            {icon && (
            <div
                style={{
                    height: 70,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img
                    src={icon}
                    alt={title}
                    style={{ width: 60, height: 60, objectFit: 'contain', marginBottom: 0 }}
                />
                {title && (
                    <span 
                        className="text-sm font-medium"
                        style={{ marginTop: 0, textAlign: 'center', width: '100%' }}
                    >
                        {title}
                    </span>
                )}
            </div>
            )}
        </div>
    );
};

export default SkillCard;