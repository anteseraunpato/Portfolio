//Mostrar si estoy online
async function updateDiscordStatus() {
        try {
            const response = await fetch('https://api.lanyard.rest/v1/users/1018991914084745216');
            const data = await response.json();

            if (response.ok) {
            const status = data.data.discord_status;
            const activity = data.data.activities.find(act => act.type === 0); // Find 'playing' activity
            const $textStatus = document.getElementById('discord-status');
            const $discordContainer = document.querySelector('.discord-container');

            // Cambiar color basado en el status
            switch (status) {
                case 'online':
                    $textStatus.textContent = 'ONLINE';
                    $textStatus.style.color = '#23272A';
                    $discordContainer.style.backgroundColor = '#57F287';
                    document.querySelector('.grid8').classList.add('active')
                    break;
                // case 'idle':
                //     $textStatus.textContent = 'Ausente';
                //     $textStatus.style.color = 'Black';
                //     $discordContainer.style.backgroundColor = '#FEE75C';
                //     break;
                // case 'dnd':
                //     $textStatus.textContent = 'Ocupado';
                //     $textStatus.style.color = 'White';
                //     $discordContainer.style.backgroundColor = '#ED4245';
                //     break;
                case 'offline':
                    $textStatus.textContent = 'OFFLINE';
                    $textStatus.style.color = 'white';
                    $discordContainer.style.background = '#23272A';
                    document.querySelector('.grid8').classList.remove('active')
                    break;
                default:
                    $textStatus.textContent = 'OFFLINE'
                    $textStatus.style.color = '#23272A';
                    document.querySelector('.grid8').classList.remove('active')

            }
            } else {
            console.error('Error fetching Discord status:', data);
            }
        } catch (error) {
            console.error('Error fetching Discord status:', error);
        }
        }

        updateDiscordStatus();
        setInterval(updateDiscordStatus, 1000); //Actualiza el status de Discord cada segundo