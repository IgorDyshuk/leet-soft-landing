export default function PhotoCard({item}) {
    return (
        <div
            className="bg-cover bg-center rounded-4xl"
            style={{
                backgroundImage: `url(${item.image})`,
                width: 'clamp(18.4375rem, 17.0303rem + 6.4331vw, 24.75rem)',
                height: 'clamp(18.4375rem, 17.0303rem + 6.4331vw, 24.75rem)',
            }}
        />
    );
}
