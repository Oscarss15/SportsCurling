

/* 
document.addEventListener('DOMContentLoaded', () => {
    const equipos = [
        'Spain', 'Netherlands', 'France', 'Italy',
        'Portugal', 'Sweden', 'Finland', 'Norway',
        'Canada', 'USA', 'Denmark', 'Greece',
        'Poland', 'Ireland', 'England', 'Iceland'
    ];
   
        // Función para barajar los equipos
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
        // Barajar los equipos
        const equiposBarajados = shuffle(equipos);
        // Función para asignar equipos a los divs 
        function assignTeamsToGroups(teams) {
            for (let i = 0; i < teams.length; i++) {
                const groupNumber = Math.floor(i / 4) + 1;
                const teamPosition = (i % 4) + 1;
                const teamDiv = document.getElementById(`name${teamPosition}group${groupNumber}`);
                if (teamDiv) {
                    teamDiv.textContent = teams[i];
                }
            }
        }
        // Asignar los equipos a los divs
        assignTeamsToGroups(equiposBarajados);
    }); */

    document.addEventListener('DOMContentLoaded', () => {
        const equipos = [
            'Spain', 'Netherlands', 'France', 'Italy',
            'Portugal', 'Sweden', 'Finland', 'Norway',
            'Canada', 'USA', 'Denmark', 'Greece',
            'Poland', 'Ireland', 'England', 'Iceland'
        ];
    
        // Función para barajar los equipos
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }
    
        // Función para asignar equipos a los divs
        function assignTeamsToGroups(teams) {
            for (let i = 0; i < teams.length; i++) {
                const groupNumber = Math.floor(i / 4) + 1;
                const teamPosition = (i % 4) + 1;
                const teamDiv = document.getElementById(`name${teamPosition}group${groupNumber}`);
                if (teamDiv) {
                    teamDiv.textContent = teams[i];
                }
            }
        }
    
        // Añadir event listener al botón "DRAW"
        document.getElementById('draw').addEventListener('click', () => {
            const equiposBarajados = shuffle(equipos);
            assignTeamsToGroups(equiposBarajados);
        });
    });
       
