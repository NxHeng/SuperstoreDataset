from googleapiclient.discovery import build
from flask import Request

def trigger_df_function_customers(request: Request):
    # Parse the JSON payload if it’s coming from an HTTP request
    event_data = request.get_json(silent=True)

    if not event_data or 'name' not in event_data:
        print("Invalid event data or 'name' field missing.")
        return 'Invalid event data', 400

    # Extract the name of the uploaded file from the event
    file_name = event_data['name']

    # Only process if the uploaded file is 'dim_customers.csv'
    if file_name != 'dim_customers.csv':
        print(f"Skipping job, {file_name} is not dim_customers.csv")
        return 'File not processed', 200

    # Set up the Dataflow job
    service = build('dataflow', 'v1b3')
    project = "data-mining-project-440015"
    template_path = "gs://dataflow-templates-us-west1/latest/GCS_Text_to_BigQuery"

    template_body = {
        "jobName": "dim_customers_load",
        "parameters": {
            "inputFilePattern": f"gs://bkt-landing-superstore/{file_name}",
            "JSONPath": "gs://bkt-df-metadata-superstore/bq-dim-customers.json",
            "outputTable": "data-mining-project-440015:superstore_dataset.dim_customers",
            "bigQueryLoadingTemporaryDirectory": "gs://bkt-df-metadata-superstore",
            "javascriptTextTransformGcsPath": "gs://bkt-df-metadata-superstore/udf-dim-customers.js",
            "javascriptTextTransformFunctionName": "transform"
        }
    }

    # Launch Dataflow job
    request = service.projects().locations().templates().launch(
        projectId=project, gcsPath=template_path, location="us-west1", body=template_body
    )
    response = request.execute()
    print(response)

    return 'Dataflow job triggered successfully', 200
