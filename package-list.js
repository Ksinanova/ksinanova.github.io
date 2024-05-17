function read_data_and_display_table() {
    console.log('consoleABC');

    // nacitat cez AJAX data z JSON
    sendAsyncRequest();
} 

function sendAsyncRequest() {
    var error_price_list = document.getElementById('error-price-list')
    error_price_list.innerText = "\n\n loading...\n\n";

    var request = new XMLHttpRequest();
    request.open('GET', 'https://ksinanova.github.io/package-list.json', true);
    request.onload = () => {
        var error_price_list = document.getElementById('error-price-list')

        try {
            fillDataIntoTable(request.responseText);
            error_price_list.innerText = "";
        } catch (error) {
            error_price_list.innerText = "\n\n Error occured while reading data. \n\n" + error;
        }
    }

    request.send();
    // document.getElementById('error-price-list').innerText = "\n\n loading...\n\n";
} 

function fillDataIntoTable(responseText) {
    var data_json = JSON.parse(responseText);
    console.log('packages:');
    console.log(data_json);

    if (!data_json.list_of_packages) {
        throw new Error("JSON data doesn't contain the list of packages");
    }

    var table_packages_data = document.getElementById('id_table_packages_data');
    if (table_packages_data == null) {
        throw new Error("JSON data doesn't contain the list of packages");
    }

    var table_data = "";
    for (let package_index = 0; package_index < data_json.list_of_packages.length; package_index++) {
        for (let photo_index = 0; photo_index < data_json.list_of_packages[package_index].photos_of_package.length; photo_index++) {
            for (let people_index = 0; people_index < data_json.list_of_packages[package_index].photos_of_package[photo_index].people.length; people_index++) {
                table_data += "<tr>";
                if (photo_index == 0 && people_index == 0) {
                    table_data += "<td>" + data_json.list_of_packages[package_index].name_of_package + "</td>";
                    table_data += "<td>" + data_json.list_of_packages[package_index].time_of_photoshooting + "</td>";
                } else {
                    table_data += "<td>&nbsp;</td><td>&nbsp;</td>";
                }

                if (people_index == 0) {
                    table_data += "<td>" + data_json.list_of_packages[package_index].photos_of_package[photo_index].place_of_photoshooting + "</td>";
                } else {
                    table_data += "<td>&nbsp;</td>";
                }

                table_data += "<td>" + data_json.list_of_packages[package_index].photos_of_package[photo_index].people[people_index].name + "</td>";

                table_data += "</tr>";
            }
        }
    }

    table_packages_data.innerHTML = table_data;
}