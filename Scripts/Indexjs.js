function indexcontroller($scope) {
    $scope.items = [{ "EmployeeId": "1", "EmployeeName": "Raghavendra", "Age": "30" },
    { "EmployeeId": "2", "EmployeeName": "Vishal", "Age": "33" },
    { "EmployeeId": "3", "EmployeeName": "Ravi", "Age": "34" },
    { "EmployeeId": "4", "EmployeeName": "Alex", "Age": "40" },
    { "EmployeeId": "5", "EmployeeName": "Kamal", "Age": "42" },
    { "EmployeeId": "6", "EmployeeName": "Sandeep", "Age": "28" },
    { "EmployeeId": "7", "EmployeeName": "Mithali", "Age": "28" },
    { "EmployeeId": "8", "EmployeeName": "Sudheer", "Age": "25" },
    { "EmployeeId": "9", "EmployeeName": "Anoop", "Age": "23" },
    { "EmployeeId": "10", "EmployeeName": "Swapnil", "Age": "21" },
    { "EmployeeId": "11", "EmployeeName": "Ankur", "Age": "26" },
    { "EmployeeId": "12", "EmployeeName": "Sayam", "Age": "55" },
    { "EmployeeId": "13", "EmployeeName": "Milind", "Age": "60" }
    ];
    $scope.sortField = "";
    $scope.perviousSortField = "";
    $scope.reverse = false;
    $scope.currentPage = 1;
    $scope.currentPageItems = []
    $scope.pageSize = 10;
    $scope.pages = [];
    $scope.getCurrentPageItems = function () {
        $scope.currentPageItems = [];
        for (var i = (($scope.currentPage - 1) * $scope.pageSize); i < ($scope.currentPage * $scope.pageSize) && i < $scope.items.length; i++) {
            $scope.currentPageItems.push($scope.items[i]);
        }
        return $scope.currentPageItems;
    }
    $scope.getPages = function () {
        $scope.pages = []
        for (var i = 0; ((i) * $scope.pageSize) < $scope.items.length; i++) {
                $scope.pages.push(i+1);
            }
            return $scope.pages;
    }
    $scope.setPage = function (page) {
        $scope.currentPage = page;
        $scope.getCurrentPageItems();
    }

    $scope.sort = function (field) {
        if ($scope.sortField == field)
            $scope.reverse = !$scope.reverse;

        $scope.sortField = field;
        $scope.items.sort(predicatBy(field, $scope.reverse));
        $scope.getCurrentPageItems();

        if (!$scope.reverse)
            $('.' + field + 'Sort').removeClass().addClass('icon-chevron-up ' + field + 'Sort');
        else
            $('.' + field + 'Sort').removeClass().addClass('icon-chevron-down ' + field + 'Sort');

        if ($scope.perviousSortField != $scope.sortField && $scope.perviousSortField != "")
        {
            $('.' + $scope.perviousSortField + 'Sort').removeClass().addClass('icon-sort ' + $scope.perviousSortField + 'Sort');
        }
        if ($scope.perviousSortField != $scope.sortField) {
            $scope.perviousSortField = $scope.sortField
        }


    };
    function predicatBy(prop , blnAscDesc) {
        return function (a, b) {
            if (!blnAscDesc) {
                if (prop == "EmployeeName") {
                    if (a[prop] > b[prop]) {
                        return 1;
                    } else if (a[prop] < b[prop]) {
                        return -1;
                    }
                }
                else {
                    if (parseInt(a[prop]) > parseInt(b[prop])) {
                        return 1;
                    } else if (parseInt(a[prop]) < parseInt(b[prop])) {
                        return -1;
                    }


                }
            }
            else {
                if (prop == "EmployeeName") {
                    if (b[prop] > a[prop]) {
                        return 1;
                    } else if (b[prop] < a[prop]) {
                        return -1;
                    }
                }
                else {
                    if (parseInt(b[prop]) > parseInt(a[prop])) {
                        return 1;
                    } else if (parseInt(b[prop]) < parseInt(a[prop])) {
                        return -1;
                    }


                }

            }
            return 0;
        }
    }
}

