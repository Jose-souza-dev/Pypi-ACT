
// área que coloca os checkbox para contagem


       // Seleciona o botão pelo seu ID
        const button = document.getElementById('convertButton');

        // Adiciona um ouvinte de eventos ao botão para que, quando clicado, execute a função handleButtonClick
        button.addEventListener('click', handleButtonClick);

        // Função que será chamada quando o botão for clicado
        function handleButtonClick() {
            // Seleciona a caixa de entrada pelo seu ID e obtém o valor digitado
            const numberInput = document.getElementById('numberInput').value;
            
            // Seleciona o contêiner onde os checkboxes serão adicionados
            const checkboxContainer = document.getElementById('checkboxContainer');
            
            // Limpa qualquer conteúdo anterior no contêiner de checkboxes
            checkboxContainer.innerHTML = '';
            
            // Converte o valor da entrada em um número inteiro
            const numberOfCheckboxes = parseInt(numberInput);
            
            // Cria o número de checkboxes especificado e adiciona-os ao contêiner
            for (let i = 0; i < numberOfCheckboxes; i++) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = false; // Define o checkbox como marcado por padrão
                checkboxContainer.appendChild(checkbox);
                //checkboxContainer.appendChild(document.createElement('br')); // Adiciona uma quebra de linha após cada checkbox
            }
        }


        // ÁREA DE PIX

                // Seleciona o botão pelo seu ID
                const copyButton = document.getElementById('copyButton');

                // Adiciona um ouvinte de eventos ao botão para que, quando clicado, execute a função copyText
                copyButton.addEventListener('click', copyText);
        
                // Função que será chamada quando o botão for clicado
                function copyText() {
                    // Seleciona a caixa de texto pelo seu ID
                    const textToCopy = document.getElementById('textToCopy');
                    
                    // Seleciona o conteúdo da caixa de texto
                    textToCopy.select();
                    textToCopy.setSelectionRange(0, 99999); // Para dispositivos móveis
        
                    // Copia o texto selecionado para a área de transferência
                    document.execCommand('copy');
                    
                    // Alerta o usuário que o texto foi copiado (opcional)
                    alert('Texto copiado para a área de transferência!');
                }