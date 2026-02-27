export const blogs = [
    {
        id: 1,
        date: '02/02/2026 - 07/02/2026',
        title: 'Week 1: Eerste week van de stage',
        category: 'Opstart',
        description: 'Tijdens mijn eerste week lag de focus voornamelijk op de opstart. We hebben e-mailadressen aangemaakt en uitgebreide informatie ontvangen over het bedrijf en de interne processen. In de eerste dagen volgden we de developer-opleiding, maar deze werd tijdelijk gepauzeerd toen we een nieuwe opdracht kregen. In dit project werkten we met Linux, Docker-containers, PostgreSQL en PITR (Point-In-Time Recovery).',
        // image: '' // kan leeg blijven
    },
    {
        id: 2,
        date: '09/02/2026 - 20/02/2026',
        title: 'Week 2 en 3: Voortgang project en bespreking',
        category: ['PostgreSQL', 'Linux', 'Terminal','Docker'] ,
        description: ' Tijdens deze weken hebben we de PITR uitgevoerd met behulp van WAL-files, zowel in een lokale omgeving als binnen Docker. In de lokale en standaard Docker omgeving verliep dit succesvol. Bij het werken met Docker-volumes ondervonden we nog technische problemen die verder onderzocht en opgelost moeten worden. Daarnaast werkten we aan een duidelijke en gestructureerde documentatie, waarin we stap voor stap uitlegden hoe het systeem functioneert en hoe het PITR-proces correct wordt uitgevoerd.',
        image: ' ./assets/deskdrive_bureau.png'
       
    },{
        id:3,
        date: '23/02/2026 - 27/02/2026',
        title: 'Week 4: Voortgang project',
        category: ['PostgreSQL', 'Linux', 'Terminal','Docker-volume'] ,
        description: ' In week 4 hebben we verder gewerkt met Docker, ditmaal met focus op het gebruik van volumes. Daarnaast hebben we de bijhorende documentatie verder uitgewerkt en een meeting gehouden waarin we een demo gaven van Docker met volumes. Vervolgens hebben we de volledige opstelling opnieuw opgebouwd met PostgreSQL versie 16 als voorbereiding op de toekomstige upgrade binnen het bedrijf. Momenteel werkt het bedrijf nog met versie 14, maar we hebben getest of alles correct functioneert in versie 16. Daarbij hebben we getest of de werking identiek bleef en of alles correct functioneerde binnen deze omgeving. Tot slot kregen we uitleg over de volgende stap: het werken met de echte database van het bedrijf, eerst in een lokale omgeving, voordat dit verder wordt uitgerold.',
        image: ''
        
    }
];
