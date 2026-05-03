import { data } from "autoprefixer";
import { image } from "framer-motion/client";

export const blogs = [
    {
        id: 1,
        date: '02/02/2026 - 07/02/2026',
        title: 'Week 1: Eerste week van de stage',
        category: 'Opstart',
        description: 'Tijdens mijn eerste week lag de focus voornamelijk op de opstart. We hebben e-mailadressen aangemaakt en uitgebreide informatie ontvangen over het bedrijf en de interne processen. In de eerste dagen volgden we de developer-opleiding, maar deze werd tijdelijk gepauzeerd toen we een nieuwe opdracht kregen. In dit project werkten we met Linux, Docker-containers, PostgreSQL en PITR (Point-In-Time Recovery).',
        image: '' // kan leeg blijven
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
        description: ' In week 4 hebben we verder gewerkt met Docker, ditmaal met focus op het gebruik van volumes. Daarnaast hebben we de bijhorende documentatie verder uitgewerkt en een meeting gehouden waarin we een demo gaven van Docker met volumes.\n\n Vervolgens hebben we de volledige opstelling opnieuw opgebouwd met PostgreSQL versie 16 als voorbereiding op de toekomstige upgrade binnen het bedrijf. Momenteel werkt het bedrijf nog met versie 14, maar we hebben getest of alles correct functioneert in versie 16.\n\n Daarbij hebben we getest of de werking identiek bleef en of alles correct functioneerde binnen deze omgeving. Tot slot kregen we uitleg over de volgende stap: het werken met de echte database van het bedrijf, eerst in een lokale omgeving, voordat dit verder wordt uitgerold.',
        image: ''    
    },
    {
        id:4,
        date: '02/03/2026 - 06/03/2026',
        title: 'Week 5: Grote database restore en docker',
        category: ['PostgreSQL', 'Linux', 'Terminal','Docker','Moving-Forward'] ,
        description: 'Deze week hebben we gewerkt aan de grote database. Eerst hebben we de database lokaal gerestored om het proces goed te begrijpen. Daarna hebben we dezelfde opzet uitgevoerd met Docker containers. Zo konden we zien hoe je een databaseomgeving op een meer gestructureerde manier kan beheren. Op woensdag zijn we ook naar het Moving Forward-event geweest. Het was een leuk en aangenaam event waar we de kans kregen om met verschillende mensen te praten en te socializen. Het was interessant om nieuwe contacten te leggen en andere mensen uit de sector te ontmoeten.',
        image: './assets/moving_forward_event.png'  
    },
    {
        id:5,
        date: '09/03/2026 - 13/03/2026',
        title: 'Week 6: Voortgang grote database restore en docker',
        category: ['PostgreSQL', 'Linux', 'Terminal','Docker'] ,
        description: ' Deze week heb ik gewerkt aan het onderzoeken van een probleem met Docker containers en bind mounts in mijn PostgreSQL recovery project. \n\nDe container kon bepaalde databasebestanden niet correct vinden, waardoor de recovery niet werkte zoals verwacht. Ik heb daarom onderzocht hoe Docker bind mounts precies werken en naar welke directories Docker kijkt op zowel de host als in de container. Tijdens dit proces heb ik verschillende configuraties getest om het probleem beter te begrijpen. Daarnaast heb ik een technisch artikel geraadpleegd om een alternatieve methode te vinden voor het herstellen van PostgreSQL back-ups. \n \nVolgens het artikel konden we echter ook niet tot de juiste oplossing komen voor het probleem dat we momenteel ervaren. Door dit onderzoek heb ik wel een beter inzicht gekregen in hoe Docker volumes werken en hoe PostgreSQL back-upbestanden gebruikt worden tijdens een herstelproces.',
       // image: './assets/pc_bureau.png'
    }, {
        id:6,
        date: '16/03/2026 - 27/03/2026',
        title: 'Week 7 en 8: Voortgang grote database en werken met 2 computers',
        category: ['PostgreSQL', 'Linux', 'Terminal','Lokaal','Wal'] ,
        description: 'Deze week heb ik verder gewerkt aan de opzet van een grote PostgreSQL-database en het implementeren van Point-In-Time Recovery (PITR). In eerste instantie heb ik geprobeerd dit te realiseren binnen een Docker-omgeving met gedeelde WAL-bestanden, maar deze aanpak bleek niet correct te functioneren.\n\nTijdens een kort overleg hebben we vastgesteld dat er een configuratiefout zat in het gebruik van de WAL-archives. Concreet werden dezelfde WAL-bestanden gebruikt voor zowel de main als de restore_data directory, wat niet de bedoeling is binnen een correcte PITR-setup. Toen we dit probeerden recht te zetten, bleef de configuratie instabiel en werkte de recovery niet meer zoals verwacht.\n\nOm deze reden heb ik ervoor gekozen om over te stappen naar een setup met twee afzonderlijke lokale machines. Dit garandeert een duidelijke scheiding tussen de omgevingen en voorkomt dat dezelfde WAL-archives door meerdere instanties worden gebruikt.\nBinnen deze nieuwe configuratie is het gelukt om een volledige databasebackup van de primaire machine succesvol over te zetten naar de secundaire machine. Daarnaast heb ik een mechanisme opgezet waarbij de WAL-bestanden automatisch van de primaire naar de secundaire machine worden doorgestuurd.\n\nTijdens het uitvoeren van de PITR-recovery trad er echter opnieuw een probleem op waarbij de recovery niet opstartte. Na verdere analyse bleek dat de oorzaak lag bij het gebruik van een verkeerde poort, waardoor er verbinding werd gemaakt met een foutieve database-instantie.\n\nNa een meeting met Tonny hebben we het probleem systematisch geanalyseerd en bevestigd dat de fout effectief bij de poortconfiguratie lag. Na het corrigeren van deze instelling functioneerde de recovery zoals verwacht.\n\nConclusie:\nPITR is lokaal succesvol geïmplementeerd en getest op beide machines, inclusief correcte WAL-replay en herstel tot een specifiek tijdstip.',
        image:''
    },
    {
        id:7,
        date: '30/03/2026 - 03/04/2026',
        title: 'Week 9: Afronding PostgreSQL-project en start Selenium testing',
        category: ['PostgreSQL', 'Linux'] ,
        description:'Deze week stond in het teken van de afwerking van het project en het automatiseren van de restore op de slave machine (recovery database op de computer). Het script werd succesvol ontwikkeld en vormt nu de basis voor een stabielere en efficiëntere recovery workflow.\n\nDaarnaast heb ik sterk ingezet op documentatie, zodat alles duidelijk en reproduceerbaar blijft. Tijdens dit proces kwamen er ook enkele fouten naar boven, die stap voor stap werden opgelost. Na het debuggen heb ik alles grondig getest om zeker te zijn dat het systeem betrouwbaar werkt.\n\nHalverwege de week heb ik een meeting gehad waarin ik het script heb voorgesteld en toegelicht. Daarnaast heb ik een demo gekregen over selenium en een korte uitleg over de werking ervan binnen het bedrijf, wat extra context bood voor het geheel.\n\nNa het voorstellen van het script tijdens de demo kreeg ik feedback en suggesties voor een betere aanpak van het script:\nCommands schrijven in één lijn met gebruik van absolute paden\nParameters verwerken binnen de command (zoals target time)\nEen nieuwe databasecluster opzetten om functionaliteiten te testen op PostgreSQL versie 16, aangezien ze van plan zijn om van versie 14 naar 16 over te zetten\nDe documentatie verder uitbreiden en aanpassen\n\nKort samengevat: een week met zichtbare vooruitgang, meer automatisatie en een duidelijke stap naar oplossingen die klaar zijn voor gebruik in productie.',
        image:''
    },
    {
        id:8,
        date:'06/04/2026 - 17/04/2026',
        title:'Week 10 en 11: Selenium testen in Java',
        category:['Selenium testen', 'Java', 'Coderen', 'Intellij'],
        description:'In week 10 en 11 heb ik gewerkt aan het schrijven van automatische testen in Java met Selenium in IntelliJ.\nWe kregen eerst een korte opfrissing van de developer opleiding om het systeem beter te begrijpen. Zo konden we gerichter testen zonder snel vast te lopen.\n\nWat heb ik getest:\n- Planning functionaliteiten\n- Toolbars binnen de planning\n- Koppelingen tussen entiteiten en taken\n- Verdere functionele testen op deze flows\n\nMoeilijkste deel:\nDe drag & drop tests in de planning waren het moeilijkst. Dit kostte de meeste tijd om stabiel en correct te automatiseren.\n\nIn week 11 werkten we vooral thuis en hadden we online meetings om voortgang en problemen te bespreken. Ook kregen we extra taken voor wanneer we klaar waren met onze tests.\n\nKort samengevat: veel geleerd over Selenium, debugging en het automatiseren van complexe UI-acties.',
     //   image:'./assets/seleniumtestenopmonitor.jpeg'
    },
    {
        id: 9,
        date: '20/04/2026 - 01/05/2026',
        title: 'Week 12 en 13: Testen, structuur en efficiënter werken',
        category: ['Selenium testen', 'Java', 'Coderen', 'Intellij', 'API'],
        description: 'Deze week lag de focus op testen, structuur en efficiënter werken.\n\nIk heb alle testen afgerond voor taken die gekoppeld zijn aan verschillende entiteiten, zoals leveringen en facturen. Dit onderdeel is volledig afgewerkt. Samen met mijn medestagiair heb ik daarnaast de taakpopup opgesplitst, waarbij we duidelijk hebben verdeeld wie welke onderdelen en knoppen test. Dit zorgde voor meer overzicht en een snellere workflow.\n\nOok heb ik de documentatie verder aangevuld met de testen die ik geschreven heb, zodat alles beter traceerbaar en duidelijk blijft.\n\nEen groot deel van mijn tijd ging naar het schrijven van testen voor de taakpopup, inclusief de details, inhoud en functionaliteit van de knoppen. Hierbij botste ik op een probleem met het instellen van datum en tijd (`setDate`): de tijd sprong telkens terug naar de standaardwaarde. De oplossing bleek uiteindelijk eenvoudig: eerst de datum opslaan en pas daarna de tijd instellen, zodat deze niet overschreven wordt.\n\nVerder heb ik de laatste wijzigingen van de main branch gemerged en conflicten opgelost. Dit verliep vlot, maar blijft een proces dat nauwkeurigheid vereist.\n\nEen belangrijke verbetering was het herstructureren van mijn testen. In plaats van alles in één klasse te plaatsen, heb ik ze opgesplitst in meerdere klassen. Dit maakt de code overzichtelijker, onderhoudbaar en cleaner.\n\nTot slot ben ik overgeschakeld naar een efficiëntere manier van werken bij het aanmaken van taken. In plaats van alles handmatig via de UI te doen, gebruik ik nu een API. Deze aanpak, gekozen door het team, versnelt het proces aanzienlijk en maakt mijn testen minder afhankelijk van de interface.\n\nKort samengevat: meer structuur, minder frictie en een duidelijk snellere manier van werken.',
        image: ''
    },
     // {
    //     id:10,
    //     date:'04/05/2026 - 15/05/2026',
    //     title:'Week 14 en 15',
    //     category:'',
    //     description:'',
    //     image:''
    // },
    
  // {
    //     id:11,
    //     date:'18/05/2026 - 22/05/2026',
    //     category:'',
    //     description:'',
    //     image:''
    // }



];






